"use client";

import { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies: any[] = []) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        console.log(`Fetching data from ${endpoint}`);
        const response = await apiClient.get<T[]>(endpoint, requestConfig);
        console.log("Full response:", response);
        console.log("Data fetched:", response.data);
        setData(response.data); // Directly set the data from response.data
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching data:", err.message);
          setError(err.message);
        } else {
          console.error("Unknown error fetching data");
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, error, isLoading };
};

export default useData;
