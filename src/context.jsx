import { useContext, createContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer/reducer';
import {
  TOGGLE_THEME,
  TOGGLE_SIDEBAR,
  SET_CURRENT_PAGE,
  SET_MAX_PAGES,
} from './actions/actions';
import { getFromLocalStorage } from './utils/localStorage';

const AppContext = createContext();

const initialState = {
  isDarkTheme: false,
  isSidebarOpen: false,
  currentPage: getFromLocalStorage('currPage' || 1),
  searchTerm: 'flowers',
  maxPages: 5,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let userSearchTerm = getFromLocalStorage('searchTerm');

  const toggleDarkTheme = () => {
    const newDarkTheme = !state.isDarkTheme;
    dispatch({ type: TOGGLE_THEME, payload: newDarkTheme });
  };
  const handlePageChange = (dir, totalPages) => {
    let newPage = state.currentPage;
    if (dir === 'prev') {
      newPage = newPage - 1;
      if (newPage < 1) {
        return;
      }
    } else if (dir === 'next') {
      newPage = parseInt(newPage) + 1;
      if (newPage > totalPages) {
        return;
      }
    }

    dispatch({ type: SET_CURRENT_PAGE, payload: newPage });
  };
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR, payload: !state.isSidebarOpen });
  };
  const setMaxPage = (pages) => {
    dispatch({ type: SET_MAX_PAGES, payload: pages });
  };
  const resetCurrPage = () => {
    dispatch({ type: SET_CURRENT_PAGE, payload: 1 });
  };
  useEffect(() => {
    document.body.classList.toggle('dark-theme', state.isDarkTheme);
  }, [state.isDarkTheme]);
  useEffect(() => {
    dispatch({ type: SET_CURRENT_PAGE, payload: 1 });
  }, [userSearchTerm]);

  return (
    <AppContext.Provider
      value={{
        state,
        toggleDarkTheme,
        toggleSidebar,
        handlePageChange,
        setMaxPage,
        resetCurrPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
