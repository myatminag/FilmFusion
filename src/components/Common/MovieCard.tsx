import { format } from "date-fns";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        <div className="rounded-md border border-white flex flex-col relative">
            <div className="w-full h-[180px] overflow-hidden">
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
            <p className="text-primary-white text-sm font-light px-2 pb-2 mt-auto">
                {format(new Date(movieData.release_date), "dd, MMM, yyyy")}
            </p>
        </div>
    );
};

export default MovieCard;
