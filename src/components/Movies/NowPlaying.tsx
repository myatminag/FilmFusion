import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// components
import SectionHeading from "../common/SectionHeading";
import MovieCard from "../common/MovieCard";

interface Props {
    nowPlayingMovies: {
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

const NowPlaying = ({ nowPlayingMovies }: Props) => {
    return (
        <div>
            <SectionHeading
                heading="Now Playing"
                viewAll="View More"
                clickViewMore="/popular"
            />

            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                className="mySwiper swiper-card"
            >
                {nowPlayingMovies?.map((now_playing) => (
                    <SwiperSlide
                        className="my-2 !w-44"
                        style={{ width: "auto" }}
                    >
                        <MovieCard
                            key={now_playing.id}
                            movieData={now_playing}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NowPlaying;
