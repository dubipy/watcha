import { url } from "inspector";
import axiosInstance from "./index";

export const latestApi = () => axiosInstance.get(url: '/movie/latest');

export const upcomingApi = () => axiosInstance.get(url: '/movie/upcoming');

export const nowPlayingApi = () => axiosInstance.get(url: '/movie/now_playing');

export const topRatedApi = () => axiosInstance.get(url: '/movie/top_rated');

export const popularApi = () => axiosInstance.get(url: '/movie/popular');

export const detailApi = (movieId: string) => axiosInstance.get(url: `/movie/${movieId}`);

export const similarApi = (movieId: string) => axiosInstance.get(url: `/movie/${movieId}/similar`);

export const searchApi = (query: string) => axiosInstance.get(url: `/search/movie?query=${query}`)