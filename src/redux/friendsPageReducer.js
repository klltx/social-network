const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const friendsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userId === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.userId === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

export default friendsPageReducer;
