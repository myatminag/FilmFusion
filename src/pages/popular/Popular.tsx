import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Mansory from "react-masonry-css";

// api
import { useGetPopularMovies } from "@/api/movies/popular-query";

// components
import MovieCard from "@/components/common/MovieCard";

const Popular = () => {
    const { ref, inView } = useInView();

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGetPopularMovies();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isLoading) return <p>Loading...</p>;

    if (isError) return null;

    const popularMovies = (data?.pages || []).flatMap((page) => page.results);

    return (
        <div className="mb-10">
            <p className="text-primary-white text-xl">Popular</p>

            <Mansory
                breakpointCols={{
                    default: 6,
                    1100: 5,
                    700: 3,
                    500: 2,
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {popularMovies?.map((popular) => (
                    <MovieCard key={popular.id} movieData={popular} />
                ))}
            </Mansory>

            <div ref={ref}>
                {hasNextPage ? (
                    isFetchingNextPage && (
                        <p className="text-center text-white">Loading...</p>
                    )
                ) : (
                    <p className="text-white text-center mt-3">
                        No More Results
                    </p>
                )}
            </div>
        </div>
    );
};

export default Popular;
