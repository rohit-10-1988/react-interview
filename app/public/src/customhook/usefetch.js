import { useState, useEffect } from "react";

function useFetchAPI(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.users);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } 
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchAPI;
