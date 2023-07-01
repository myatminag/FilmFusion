// api
import { useGetPopularMovies } from "@/api/movies/popular-query";
import { useGetNowPlayingMovies } from "@/api/movies/nowplaying-query";

// components
import Popular from "@/components/movies/Popular";
import NowPlaying from "@/components/movies/NowPlaying";

const Home = () => {
    const popularMoviesResult = useGetPopularMovies();
    const nowPlayingMoviesResult = useGetNowPlayingMovies();

    // loading
    const isLoading =
        popularMoviesResult.isLoading || nowPlayingMoviesResult.isLoading;

    const isError =
        popularMoviesResult.isError || nowPlayingMoviesResult.isError;

    const popularMovies = (popularMoviesResult?.data?.pages || []).flatMap(
        (page) => page.results
    );
    const nowPlayingMovies = (
        nowPlayingMoviesResult?.data?.pages || []
    ).flatMap((page) => page.results);

    if (isLoading) return <p>Loading...</p>;

    if (isError) return null;

    return (
        <div>
            <Popular popularMovies={popularMovies} />

            <NowPlaying nowPlayingMovies={nowPlayingMovies} />
        </div>
    );
};

export default Home;
