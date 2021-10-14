import React from "react";

const NewsItem = ({ newsItem }) => {
  return (
    <div className="news-item">
      <h2 className="news-item__title">{newsItem.node.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: newsItem.node.content }} />
    </div>
  );
};

export default NewsItem;
