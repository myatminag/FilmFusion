import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

type PopularMovieResponse = {
    page: number;
    results: {
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
    total_pages: number;
    total_results: number;
};

export const useGetPopularMovies = () => {
    return useInfiniteQuery<PopularMovieResponse>({
        queryKey: ["popular"],
        queryFn: async ({ pageParam = 1 }) => {
            return apiClient
                .get("/movie/popular", {
                    params: {
                        page: pageParam,
                    },
                })
                .then((res) => res.data);
        },
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.page === 500) return undefined;
            return allPages.length + 1;
        },
    });
};
