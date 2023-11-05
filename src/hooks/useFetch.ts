import { useState, useEffect } from 'react';

export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

export const useApiGet = (url: string): TApiResponse => {
  const [status, setStatus] = useState<Number>(0),
    [statusText, setStatusText] = useState<String>(''),
    [data, setData] = useState<any>(),
    [error, setError] = useState<any>(),
    [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url), json = await apiResponse.json();

      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};