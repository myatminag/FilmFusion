import { Link } from "react-router-dom";
import MetaData from "../components/MetaData";

const Home = () => {
    return (
        <div>
            <MetaData title={"Home"} />
            Home
            <Link to="/page">Page</Link>
        </div>
    );
};

export default Home;
