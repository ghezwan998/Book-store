import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/book");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
