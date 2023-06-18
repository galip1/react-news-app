import React from "react";
import "./newsItem.css";
const NewsItem = ({ news }) => {
  return (
    <div className="news-item">
      <div>
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <a
          className="read-more"
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
      <img className="news-img" src={news.urlToImage} alt={news.title} />
    </div>
  );
};

export default NewsItem;
