# Task 1 — Favorites Feature (Redux Toolkit)

You are extending a content application by adding a Favorites feature.
A favorites list lets users save articles they want to read later. Manage the favorites using Redux Toolkit by creating a new slice, registering it with the store, and building the component that displays the saved articles.

## Provided Code

The following are already implemented — do not change them:

- The articles slice, holding the list of available articles
- The Redux Provider wrapping the application
- The article list, where every article has an Add to Favorites and a Remove button already wired to dispatch your actions

Each article is an object of this shape:

```js
{ id: 1, title: "JavaScript Closures", author: "Kabir" }
```

## Functional Requirements

### 1. Favorites Slice

Create a Redux slice named `favorites` in `src/features/favoritesSlice.js`.

The initial state is:

```js
{ items: [] }
```

Implement three reducers, each receiving the article object as `action.payload`:

| Reducer | Behaviour |
| --- | --- |
| `addToFavorites` | Adds the article to `items`. If an article with the same `id` is already in the list, the state is left unchanged. |
| `removeFromFavorites` | Removes the article whose `id` matches the payload. |
| `clearFavorites` | Empties `items`. |

- Export the three action creators as named exports
- Export the reducer as the default export

### 2. Store Configuration

Register the favorites reducer in the store at `src/app/store.js`.

The store must manage both slices:

```js
{
  articles: { ... },
  favorites: { ... }
}
```

### 3. Favorites Count

Display the number of saved articles in exactly this format:

```
Saved Articles: 2
```

- The text stays the same for every count - `Saved Articles: 1` and `Saved Articles: 0` are correct
- The element must carry `data-testid="favorites-count"`

### 4. Article Display

- Render every article in the favorites state
- Each one shows its title, and its author prefixed with `Written by:`

For example:

```
JavaScript Closures
Written by: Kabir

Node.js Streams
Written by: Priya
```

- The container holding the articles must carry `data-testid="favorites-list"`
- Each individual article must carry `data-testid="favorite-item"`

### 5. Clear Favorites

- Add a button labelled `Clear Favorites`
- Clicking it dispatches `clearFavorites`, removing every saved article
- The button must carry `data-testid="btn-clear"`

## Expected Behaviour

| Action | Count | Articles shown |
| --- | --- | --- |
| Initial render | Saved Articles: 0 | none |
| Add Node.js Streams | Saved Articles: 1 | Node.js Streams |
| Add Node.js Streams again | Saved Articles: 1 | Node.js Streams |
| Add TypeScript Generics | Saved Articles: 2 | Node.js Streams, TypeScript Generics |
| Remove Node.js Streams | Saved Articles: 1 | TypeScript Generics |
| Click Clear Favorites | Saved Articles: 0 | none |
