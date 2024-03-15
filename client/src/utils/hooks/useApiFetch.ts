import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "../../types/ApiResponse.types";
import { useEffect, useState } from "react";

interface Result {
  data: ApiResponse | null;
  error: string | null;
  isLoading: boolean;
}

const useApiFetch = (apiRoute: string): Result => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(
          `${process.env.REACT_APP_API_URL}${apiRoute}`
        );
        setData(response.data);
      } catch (err: any) {
        setError(err.message || "An err occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiRoute]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useApiFetch;
