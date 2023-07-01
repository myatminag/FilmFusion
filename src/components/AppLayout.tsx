import { Outlet } from "react-router-dom";

// hooks
import useMediaQuery from "../hooks/useMediaQuery";

// components
import NavigationMobile from "./navigation/NavigationMobile";
import NavigationWeb from "./navigation/NavigationWeb";

const AppLayout = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <main className="px-4 lg:px-[10rem]">
            {isMobile ? <NavigationMobile /> : <NavigationWeb />}
            <section className="">
                <Outlet />
            </section>
        </main>
    );
};

export default AppLayout;
