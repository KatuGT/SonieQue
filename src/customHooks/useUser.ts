"use client"
import { axiosInstance } from "@/utils/axiosInstance";
import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import useSWR from 'swr'

const useUser = () => {

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



    const apiUrl = '/user/get_user_auth';

    const { data, error, isLoading, isValidating, mutate } = useSWR(token ? apiUrl : null, fetcher);

    return { data, error, isLoading, isValidating, mutate }
}

export default useUser