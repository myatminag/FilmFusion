import { createBrowserRouter } from "react-router-dom";

// components
import AppLayout from "./components/AppLayout";

// pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Page from "./pages/Page";
import Popular from "./pages/popular/Popular";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "page", element: <Page /> },
            { path: "popular", element: <Popular /> },
        ],
    },
]);

export default router;
