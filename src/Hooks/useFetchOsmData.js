import { useState, useEffect } from "react";
import osmtogeojson from "osmtogeojson";
import axios from "axios";
const API_ENDPOINT = `https://www.openstreetmap.org/api/0.6/map`;

const useFetchOsmData = (cords) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);
  const fetchOsmData = async (url) => {
    try {
      let response = await axios.get(url);
      response = osmtogeojson(response.data);
      console.log(response);
      setIsLoading(false);
      setData(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError({ show: true, msg: error.response.data });
    }
  };

  useEffect(() => {
    if (!cords) {
      return;
    }
    setIsLoading(true);
    fetchOsmData(
      `${API_ENDPOINT}?bbox=${cords?.min_longitude},${cords?.min_latitude},${cords?.max_longitude},${cords?.max_latitude}`
    );
  }, [cords]);

  return { isLoading, error, data, setError };
};

export default useFetchOsmData;
