//custom hook to fetch data from a provided URL inside a conatainer called baseURL in app.jsx

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null); // State to store the fetched data, initially null

  const [error, setError] = useState(null); // State to store the error encounter, initially null

  const [loading, setLoading] = useState(true);

  //useEffect hook to perform side effects (data fetching in this case)
  useEffect(() => {
    const getData = async () => {
      //Async function to fetch data
      const fetchedData = await fetch(url); // fetch data from the provided URL

      const jsonData = await fetchedData.json(); // Convert the fetched data to JSON format

      setData(jsonData.tasks ? jsonData.tasks : jsonData.task); // update the data state that was formally null with setData..... updating data with fetched data

      setLoading(false);
      console.log(jsonData);
    };

    setTimeout(async () => {
      try {
        await getData(); // invoke the getData function to fetch the data
      } catch (error) {
        console.log(error);
        setError("OOPs seomething went wrong");
        setLoading(false);
      }
    }, 3000);
  }, []);

  return { data, setData, error, loading }; // Return an object containing data
};
