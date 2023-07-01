import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                className="mySwiper swiper-card"
            >
                {popularMovies?.map((popular) => (
                    <SwiperSlide
                        className="my-2 !w-[176px]"
                        style={{ width: "auto" }}
                    >
                        <MovieCard key={popular.id} movieData={popular} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Popular;
