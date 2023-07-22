import { createBrowserRouter } from "react-router-dom";

// components
import AppLayout from "./layouts/AppLayout";

// pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoveDetails from "./pages/Movies/MoveDetails";
import Series from "./pages/Series";
import SeriesDetails from "./pages/Series/SeriesDetails";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "movies",
                children: [
                    { element: <Movies />, index: true },
                    { path: ":id", element: <MoveDetails /> },
                ],
            },
            {
                path: "series",
                children: [
                    { element: <Series />, index: true },
                    { path: ":id", element: <SeriesDetails /> },
                ],
            },
        ],
    },
]);

export default router;
