import Banner from "@/components/ui/home/components/banner";
import Catagaries from "@/components/ui/home/components/catagaries";
import ForYouProducts from "@/components/ui/home/components/forYouProducts";
import React from "react";


export default function Home() {
  return (
    <div>
      <Banner />
      <Catagaries />
      <ForYouProducts />
    </div>
  );
}
