import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { adminAPI, User } from "../../api/api";

export const Profile = () => {
  const [user, getUser] = useState<User | null>(null);
  const history = useHistory();
  const fetch = async () => {
    try {
      getUser(await adminAPI.getMe());
    } catch (error) {
      history.push("/login");
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return user ? (
    <div className='header-profile'>
      <div className='header-profile__info'>
        <h4 className='name'>{user.username}</h4>
        <p className='position'>{user.role}</p>
      </div>
      <div className='header-profile__avatar'>
        {user.username ? user.username.substring(0, 1) : ""}
      </div>
    </div>
  ) : null;
};
