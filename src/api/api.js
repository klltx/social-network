import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d0362587-e54d-4d20-afac-25d227b52e1e",
  },
});

export const usersAPI = {
  getUsers(count = 1, page = 10) {
    return instance
      .get(`users?count=${count}&page=${page}`)
      .then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
  },
  followUser(userId) {
    return instance
      .post(
        `follow/${userId}`,
      )
  }
};

export const profileAPI = {
  getUserProfile(userId){
    return instance
      .get(`profile/${userId}`)
  }
}

export const authAPI = {
  getAuthData() {
    return instance
      .get(`auth/me`)
  }
}