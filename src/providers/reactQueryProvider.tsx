
"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}


