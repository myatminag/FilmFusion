import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import router from "./router";
import { useState } from "react";

function App() {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </HelmetProvider>
        </>
    );
}

export default App;
