import { createContext, useContext, useEffect, useState } from 'react';

const SavedRecipesContext = createContext(null);

const STORAGE_KEY = 'party_menu_saved_recipes';

function getStoredSavedItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function SavedRecipesProvider({ children }) {
  const [savedItems, setSavedItems] = useState(() => getStoredSavedItems());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems));
  }, [savedItems]);

  const isSaved = (id) => savedItems.some((item) => item.id === Number(id));

  const toggleSaved = (item) => {
    setSavedItems((current) => {
      const alreadySaved = current.some((saved) => saved.id === item.id);
      if (alreadySaved) {
        return current.filter((saved) => saved.id !== item.id);
      }
      return [...current, item];
    });
  };

  const removeSaved = (id) => {
    setSavedItems((current) => current.filter((saved) => saved.id !== Number(id)));
  };

  const value = {
    savedItems,
    savedCount: savedItems.length,
    isSaved,
    toggleSaved,
    removeSaved,
  };

  return (
    <SavedRecipesContext.Provider value={value}>
      {children}
    </SavedRecipesContext.Provider>
  );
}

export function useSavedRecipes() {
  const context = useContext(SavedRecipesContext);
  if (!context) {
    throw new Error('useSavedRecipes must be used within a SavedRecipesProvider');
  }
  return context;
}