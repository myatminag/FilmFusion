import { createBrowserRouter } from "react-router-dom";

// components
import AppLayout from "./layouts/AppLayout";

// pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "movies", element: <Movies /> },
            { path: "series", element: <Series /> },
        ],
    },
]);

export default router;
