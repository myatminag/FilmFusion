import { Outlet } from "react-router-dom";

// hooks
import useMediaQuery from "../hooks/useMediaQuery";

// components
import NavigationMobile from "./navigation/mobile/navigation.mobile";
import NavigationWeb from "./navigation/web/navigation.web";

const AppLayout = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {isMobile ? <NavigationMobile /> : <NavigationWeb />}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppLayout;
