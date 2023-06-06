import { Link } from "react-router-dom";
import { useGetPopularMovies } from "../api/movies/popular-query";

const Home = () => {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGetPopularMovies();

    const formattedData = (data?.pages || []).flatMap((page) => page.results);

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>Error...</p>;

    return (
        <div>
            <Link to={"/page"}>Page</Link>
        </div>
    );
};

export default Home;
