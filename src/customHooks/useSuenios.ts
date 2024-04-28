"use client"
import { axiosInstance } from "@/utils/axiosInstance";
import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import useSWR from 'swr'

const useUserSuenios = () => {

    const token = Cookies.get('token');

    const fetcher = async (url: string) => {
        try {
            const response = await axiosInstance(url, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    };



    const apiUrl = '/user/user_post';

    const { data: suenios, error: sueniosError, isLoading: sueniosIsLoading, isValidating: sueniosIsValidating, mutate } = useSWR(token ? apiUrl : null, fetcher);

    return { suenios, sueniosError, sueniosIsLoading, sueniosIsValidating, mutate }
}

export default useUserSuenios