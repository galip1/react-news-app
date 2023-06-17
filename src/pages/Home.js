import React from "react";
import NewsList from "../components/NewsList";
import Header from "../components/Header";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <h1>Latest News</h1>
      <NewsList />
    </div>
  );
};

export default Home;
