import { Link } from "react-router-dom";

const NavigationWeb = () => {
    return (
        <nav className="w-full py-4 flex items-center justify-between">
            <p className="text-white text-xl">FilmFusion</p>

            <div className="flex items-center gap-x-3">
                <Link to="/movies" className="text-white">
                    Movies
                </Link>
                <Link to="/series" className="text-white">
                    Series
                </Link>
            </div>
        </nav>
    );
};

export default NavigationWeb;
