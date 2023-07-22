import { useCallback } from "react";
import { Outlet, ScrollRestoration, useMatches } from "react-router-dom";

// hooks
import useMediaQuery from "../hooks/useMediaQuery";

// components
import NavigationMobile from "@/components/Common/NavigationMobile";
import NavigationWeb from "@/components/Navigation/NavigationWeb";

const AppLayout = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    let getKey = useCallback(
        (location: Location, matches: ReturnType<typeof useMatches>) => {
            let match = matches.find((m) => (m.handle as any)?.scrollMode);
            if ((match?.handle as any)?.scrollMode === "pathname") {
                return location.pathname;
            }

            return location.key;
        },
        []
    );

    return (
        <main className="px-4 lg:px-[10rem]">
            {isMobile ? <NavigationMobile /> : <NavigationWeb />}
            <section>
                <Outlet />
                <ScrollRestoration getKey={getKey} />
            </section>
        </main>
    );
};

export default AppLayout;
