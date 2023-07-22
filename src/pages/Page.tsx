import { Link } from "react-router-dom";

import MetaData from "../components/Common/MetaData";

const Page = () => {
    return (
        <div>
            <MetaData title={"Page"} />
            Page
            <Link to={"/"}>Home</Link>
        </div>
    );
};

export default Page;
