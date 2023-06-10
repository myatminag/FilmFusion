import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Page from "./pages/Page";
import AppLayout from "./components/AppLayout";
import Popular from "./pages/Popular";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/page", element: <Page /> },
            { path: "popular", element: <Popular /> },
        ],
    },
]);

export default router;
