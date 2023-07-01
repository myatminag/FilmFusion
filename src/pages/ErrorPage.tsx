import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <p className="text-white text-center">Oops!</p>
        </div>
    );
};

export default ErrorPage;
