"use client"
import { useFiltrosStore } from "@/store/filtrosSuenios";
import { axiosInstance } from "@/utils/axiosInstance";
import axios, { AxiosRequestConfig } from "axios";
import useSWR from 'swr'

const usePublicSuenios = () => {

    // const token = Cookies.get('token');

    // const fetcher = async (url: string) => {
    //     try {
    //         const response = await axiosInstance(url, {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    //         return response.data;
    //     } catch (error) {
    //         throw new Error('Failed to fetch data');
    //     }
    // };



    // const apiUrl = '/user/user_post';

    // const { data: suenios, error: sueniosError, isLoading: sueniosIsLoading, isValidating: sueniosIsValidating, mutate } = useSWR(token ? apiUrl : null, fetcher);


    const fetcher = async (url: string) => {
        try {
            const response = await axiosInstance(url);
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch data");
        }
    };

    const filtrosElegidos = useFiltrosStore((state) => state.filtros);

    const {
        data: sueniosPublicos,
        error: sueniosError,
        isLoading: sueniosIsLoading,
        isValidating: sueniosIsValidating,
    } = useSWR(`/public/filter_post?categoryIds=${filtrosElegidos.join(",")}`, fetcher);

    return { sueniosPublicos, sueniosError, sueniosIsLoading, sueniosIsValidating }
}

export default usePublicSuenios