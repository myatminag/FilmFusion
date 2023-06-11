import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// api
import { useGetPopularMovies } from "@/api/movies/popular-query";

// components
import MovieCard from "@/components/Common/MovieCard";

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

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                {popularMovies?.map((popular) => (
                    <MovieCard key={popular.id} movieData={popular} />
                ))}
            </div>

            <div ref={ref}>
                {hasNextPage ? (
                    isFetchingNextPage && <p>Loading...</p>
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
