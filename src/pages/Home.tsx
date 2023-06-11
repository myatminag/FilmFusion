// api
import { useGetPopularMovies } from "@/api/movies/popular-query";
import { useGetNowPlayingMovies } from "@/api/movies/nowplaying-query";

// components
import MetaData from "@/components/MetaData";
import Popular from "@/components/Movies/Popular";
import NowPlaying from "@/components/Movies/NowPlaying";

const Home = () => {
    const popularMoviesResult = useGetPopularMovies();
    const nowPlayingMoviesResult = useGetNowPlayingMovies();

    // loading
    const isLoading =
        popularMoviesResult.isLoading || nowPlayingMoviesResult.isLoading;

    const isError =
        popularMoviesResult.isError || nowPlayingMoviesResult.isError;

    if (isLoading) return <p>Loading...</p>;

    if (isError) return null;

    const popularMovies = (popularMoviesResult?.data?.pages || []).flatMap(
        (page) => page.results
    );
    const nowPlayingMovies = (
        nowPlayingMoviesResult?.data?.pages || []
    ).flatMap((page) => page.results);

    return (
        <div>
            <MetaData title={"Home"} />

            <Popular popularMovies={popularMovies} />

            <NowPlaying nowPlayingMovies={nowPlayingMovies} />
        </div>
    );
};

export default Home;
