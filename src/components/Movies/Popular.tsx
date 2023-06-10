import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// components
import SectionHeading from "../Common/SectionHeading";

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
            <SectionHeading heading="Popular" viewAll="View More" />

            <div>
                {popularMovies?.map((popular) => (
                    <div key={popular.id}>
                        <LazyLoadImage
                            src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                            alt={popular.original_title}
                            effect="blur"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popular;
