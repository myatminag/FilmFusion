import { Link } from "react-router-dom";
import { format } from "date-fns";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// assets
import Rating from "@/assets/rating.svg";

interface Props {
    movieData: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    };
}

const MovieCard = ({ movieData }: Props) => {
    return (
        <Link
            to={`/detail/${movieData.id}`}
            className="rounded-md bg-[#292738] flex flex-col h-full relative"
        >
            <div className="w-full h-[200px] overflow-hidden mb-1">
                <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                    alt={movieData.original_title}
                    effect="blur"
                    className="rounded-md w-full h-full object-fill"
                />
            </div>

            <p className="px-2 line-clamp-2 font-semibold text-primary-white">
                {movieData.title}
            </p>
            <div className="px-2 pb-2 mt-auto flex items-center gap-x-2">
                <img src={Rating} alt="rating" />
                <p className="text-primary-white text-sm font-light">
                    {movieData.vote_average}
                </p>
                <p className="text-primary-white">|</p>
                <p className="text-primary-white text-sm font-light">
                    {format(new Date(movieData.release_date), "dd, MMM, yyyy")}
                </p>
            </div>
        </Link>
    );
};

export default MovieCard;
