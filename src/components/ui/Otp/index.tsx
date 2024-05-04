import axios from 'axios';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';



type Props = {
    setSteps: (steps: number) => void;
};

export default function Otp({ setSteps }: Props) {
    const [otp, setOtp] = useState('');

    // console.log(otp, 'OTp');


    const onOtp = () => {
        console.log(otp, 'OTp');
        try {
            axios.post('http://localhost:8000/user/signupVerify', { varifcationCode: otp }).then((resp) => {
                if (resp.data) {

                    setSteps(3)
                }
            })
        } catch (error) {
            console.log(error);

        }

    }


    return (

        <div className='flex flex-col items-center justify-center py-10'>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={'h-12 mx-1 text-center text-2xl border rounded'}
            />


            <button onClick={onOtp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[70%] mt-10 rounded-full">
                Button
            </button>
        </div>
    );
}


// px - [17px]


