// components
import SectionHeading from "../common/SectionHeading";
import MovieCard from "../common/MovieCard";

interface Props {
    popularMovies: {
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
    }[];
}

const Popular = ({ popularMovies }: Props) => {
    return (
        <div>
            <SectionHeading
                heading="Popular"
                viewAll="View More"
                clickViewMore="/popular"
            />

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
                {popularMovies?.map((data) => (
                    <MovieCard movieData={data} />
                ))}
            </div>
        </div>
    );
};

export default Popular;
