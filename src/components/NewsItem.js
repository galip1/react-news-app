import React from "react";

const NewsItem = ({ news }) => {
  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <img src={news.urlToImage} alt={news.title} />
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsItem;
