import { SET_BOOKMARK, GET_BOOKMARK, DELETE_BOOKMARK } from './constants';

export const setBookmark = (bookmarks) => ({
  type: SET_BOOKMARK,
  bookmarks,
});

export const getBookmark = () => ({
  type: GET_BOOKMARK,
});

export const deleteBookmark = (bookmarkId) => ({
  type: DELETE_BOOKMARK,
  bookmarkId,
});
