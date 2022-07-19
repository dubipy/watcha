import { url } from "inspector";
import axiosInstance from "./index";

export const latestApi = () => axiosInstance.get(url: '/tv/latest');

export const airingTodayApi = () => axiosInstance.get(url: '/on_the_air/');

export const popularApi = () => axiosInstance.get(url: '/popular');

export const toRatedApi = () => axiosInstance.get(url: '/tv/');

export const datailApi = (tvId: string) => axiosInstance.get(url: `/tv/${tvId}`);

export const similarApi = (tvId: string) => axiosInstance.get(url: `/tv/${tvId}/similer`);

export const searchApi = (query: string) => axiosInstance.get(url: `/search/tv?query=${query}`);
