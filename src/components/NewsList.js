import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          apiKey: "your_api", // Kendi API anahtarınızı buraya ekleyin
        },
      });
      setNews(response.data.articles);
    };
    fetchNews();
  }, []);

  return (
    <div>
      {news.map((item) => (
        <NewsItem key={item.url} news={item} />
      ))}
    </div>
  );
};

export default NewsList;
