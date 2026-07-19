# Party Menu Application

A responsive food discovery web app for browsing, filtering, and saving dishes from a curated party menu.

## Live Demo

- **Live URL:** https://party-menu-app-eta.vercel.app/
- **Test credentials:** `admin@example.com` / `admin123`

## Tech Stack

- React 19
- React Router DOM 7
- Vite 6
- Plain CSS (no framework)

## Features

- Sign-in against a live authentication API, with token and user data persisted in local storage
- Protected `/` route — redirects unauthenticated users to `/signin`, and signed-in users away from `/signin`
- Category and diet filtering, plus name search (triggered by the Search button)
- Responsive menu grid with an empty state for no-match filters
- Food detail page with hero image, category/diet badges, full description, servings, and ingredients
- Save/unsave recipes, persisted in local storage, with a live badge count in the header
- Dedicated Saved Recipes page with remove functionality and its own empty state
- 404 page for unmatched routes

## Project Structure
src/
├── components/       # Header, FilterBar, FoodCard, SavedRecipeCard, ProtectedRoute
├── context/          # AuthContext, SavedRecipesContext
├── data/             # Static menu data + filter/lookup functions
├── pages/            # SignIn, Menu, FoodDetail, SavedRecipes, NotFound
├── styles/           # Shared card styles
├── App.jsx
├── main.jsx
└── index.css
## Getting Started

```bash
git clone https://github.com/Thejesh1007/party-menu-app.git
cd party-menu-app
npm install
npm run dev
```

Open `http://localhost:5173` and sign in with the test credentials above.

## Local Storage Keys

| Data          | Key                         |
|---------------|------------------------------|
| Auth token    | `party_menu_token`           |
| User data     | `party_menu_user`            |
| Saved recipes | `party_menu_saved_recipes`   |

## Notes

- Menu data is static (`src/data/menuData.js`) — only sign-in calls a live API. No API key is required anywhere.
- All 50 dishes intentionally share a single placeholder image, matching the provided dataset.