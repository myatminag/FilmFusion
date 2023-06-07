import NavigationWeb from "../navigation/web/navigation.web";

type ComponentProps = React.PropsWithChildren;

const Layout = ({ children }: ComponentProps) => {
    return (
        <>
            <NavigationWeb />
            <main>{children}</main>
        </>
    );
};

export default Layout;
