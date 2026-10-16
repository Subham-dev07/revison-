import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "./features/favoritesSlice";
import Favorites from "./components/Favorites";
import ArticleList from "./components/ArticleList";

import "./App.css";

function App() {
  const articles = useSelector((state) => state.articles.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Articles</h1>

      <div data-testid="articles-list">
        {articles.map((article) => (
          <div key={article.id} data-testid="article-item">
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <button
              data-testid={`btn-add-${article.id}`}
              onClick={() => dispatch(addToFavorites(article))}
            >
              Add to Favorites
            </button>
            <button
              data-testid={`btn-remove-${article.id}`}
              onClick={() => dispatch(removeFromFavorites(article))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <Favorites />
    </div>
  );
}

export default App;
