import { useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const fetchFunction = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setSearchResult(result);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchFunction, searchResult, isLoading, hasError];
};
export default useFetch;
