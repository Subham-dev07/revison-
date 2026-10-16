import React from "react";
import { useSelector, useDispatch } from "react-redux";
// TODO: Import the required action from favoritesSlice.js.

function Favorites() {
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 data-testid="favorites-count">
        {/* TODO: Display the favorites count in the required format. */}
      </h2>

      <div data-testid="favorites-list">
        {/* TODO: Render each saved article.
             Each article must display its title and author.
             Use data-testid="favorite-item" for each article. */}
      </div>

      <button
        data-testid="btn-clear"
        // TODO: Handle the Clear Favorites button click.
      >
        Clear Favorites
      </button>
    </div>
  );
}

export default Favorites;
