import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";
import * as AppState from '../../state/app.state';
import * as UserActions from './user.actions';

export interface State extends AppState.State {
    users: UserState;
}

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initialState: UserState = {
    maskUserName: false,
    currentUser: null
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserActions.maskUserName, (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
);
