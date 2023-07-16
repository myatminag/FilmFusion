import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/detail/${movieData.id}`)}
            className="rounded-md w-full h-[200px] relative"
        >
            <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.original_title}
                effect="blur"
                className="rounded-t-md w-full h-[230px] object-cover"
            />

            <div className="px-2 pb-2 absolute bottom-0">
                <p className="line-clamp-2 text-sm font-semibold text-primary-white">
                    {movieData.title}
                </p>
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <img src={Rating} alt="rating" />
                        <p className="text-primary-white text-xs font-light">
                            {movieData.vote_average}
                        </p>
                    </div>
                    <p className="text-primary-white text-xs">|</p>
                    <p className="text-primary-white text-xs font-light">
                        {format(
                            new Date(movieData.release_date),
                            "dd, MMM, yyyy"
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
