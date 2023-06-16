import React from "react";
import NewsList from "../components/NewsList";
import Header from "../components/Header";

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
