import React, { createContext, useState, useContext } from 'react';

// Create the context
const PageTitleContext = createContext();

/**
 * PageTitleProvider - Context provider for managing the current page title
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Home');

  // Value to be provided to consumers
  const value = {
    pageTitle,
    setPageTitle
  };

  return (
    <PageTitleContext.Provider value={value}>
      {children}
    </PageTitleContext.Provider>
  );
};

/**
 * Custom hook to use the PageTitleContext
 * @returns {Object} - PageTitleContext value with pageTitle and setPageTitle
 */
export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  
  if (!context) {
    throw new Error('usePageTitle must be used within a PageTitleProvider');
  }
  
  return context;
}; 