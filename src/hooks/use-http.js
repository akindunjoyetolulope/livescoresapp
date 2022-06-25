import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something Went Wrong! :(");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setIsError(err.message || "Something Went Wrong! :(");
    }
    setIsLoading(false);
  }, []);
  return { isError, isLoading, sendRequest };
};

export default useHttp;
