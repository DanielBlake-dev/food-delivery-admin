import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { adminAPI, User } from "../../api/api";

import Shipped from "../../assets/icons/shipped.svg";
import Logo from "../../assets/logo.svg";
import { Profile } from "../Profile/Profile";

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const history = useHistory();

  const handleLogout = () => {
    adminAPI.logout();
    history.push("/login");
  };

  const fetch = async () => {
    const user = await adminAPI.getMe();

    setUser(user);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Вкуснота' />
      </Link>
      {user && user.role == "Admin" ? (
        <nav className='header-menu'>
          <Link className='header-menu__item' to='/dishes'>
            Блюда
          </Link>
          <Link className='header-menu__item' to='/ingredients'>
            Ингредиенты
          </Link>
        </nav>
      ) : null}

      <div className='header-actions'>
        {user && user.role == "Courier" ? (
          <Link className='header-delivery' to='/delivered'>
            <img src={Shipped} alt='' />
          </Link>
        ) : null}

        <Profile />
        <button onClick={handleLogout} className='button button_outlined'>
          Выйти
        </button>
      </div>
    </header>
  );
};
