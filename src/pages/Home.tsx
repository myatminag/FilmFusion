// api
import { useGetPopularMovies } from "@/api/movies/popular-query";

// components
import MetaData from "@/components/MetaData";
import Popular from "@/components/Movies/Popular";

const Home = () => {
    const { data, isLoading, isError } = useGetPopularMovies();

    if (isLoading) return <p>Loading...</p>;

    if (isError) return null;

    const popularMovies = (data?.pages || []).flatMap((page) => page.results);

    return (
        <div>
            <MetaData title={"Home"} />

            <Popular popularMovies={popularMovies} />
        </div>
    );
};

export default Home;
