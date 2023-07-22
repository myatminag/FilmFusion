import { useParams } from "react-router-dom";

// api
import { useGetMovieDetail } from "@/api/movies/moveDetail.query";

const Details = () => {
    const { movieId } = useParams();

    const { data } = useGetMovieDetail(movieId);

    console.log("data", data);

    return <div>Details</div>;
};

export default Details;
