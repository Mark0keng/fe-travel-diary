import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetailState = (state) => state.detail || initialState;

export const selectDetailPost = createSelector(selectDetailState, (state) => state.detailPost);
