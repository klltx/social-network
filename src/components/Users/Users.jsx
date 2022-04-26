import React from "react";
import { NavLink } from "react-router-dom";
import defaultAvatar from "./../../assets/images/avatar.png";
import { usersAPI } from "../../api/api";

const Users = ({
  pagesCount,
  page,
  setCurrentPage,
  setPage,
  users,
  unfollow,
  follow,
  followingProgress,
  toggleFollowingProgress,
}) => {
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <main>
      {users.map((u) => {
        return (
          <div key={u.id}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small || defaultAvatar}
                alt={u.name + " avatar"}
              />
              <span>{u.name}</span>
            </NavLink>
            {u.followed ? (
              <button
                disabled={followingProgress.some(id => id === u.id)}
                onClick={() => { unfollow(u.id) }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingProgress.some(id => id === u.id)}
                onClick={() => { follow(u.id) }}
              >
                Follow
              </button>
            )}
          </div>
        );
      })}
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={page === p ? "selected" : ""}
            onClick={(e) => {
              setCurrentPage(p);
              setPage(p);
            }}
          >
            {p + " "}
          </span>
        );
      })}
    </main>
  );
};

export default Users;
