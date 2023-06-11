import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

type NowPlayingResponse = {
    dates: {
        maximum: string;
        minimum: string;
    };
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

export const useGetNowPlayingMovies = <TData = NowPlayingResponse>() => {
    return useInfiniteQuery<NowPlayingResponse, unknown, TData>({
        queryKey: ["now_playing"],
        queryFn: async ({ pageParam = 1 }) => {
            return apiClient
                .get("movie/now_playing", {
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
        keepPreviousData: true,
    });
};
