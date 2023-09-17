import {
  TOGGLE_THEME,
  TOGGLE_SIDEBAR,
  SET_CURRENT_PAGE,
  SET_MAX_PAGES,
} from '../actions/actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isDarkTheme: action.payload };
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_MAX_PAGES:
      return { ...state, maxPages: action.payload };
    default:
      console.log('No such action exists in actions list.');
      return { ...state };
  }
};
