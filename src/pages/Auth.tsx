import React from "react";

import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { Input } from "../components/Input/Input";

import Illustation from "../assets/auth-illustation.png";
import { adminAPI } from "../api/api";

export const Auth = () => {
  const history = useHistory();
  const handleSubmit = (value: any) => {
    adminAPI
      .login(value)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className='auth'>
      <div className='auth-form'>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            username: "",
            password: "",
          }}>
          <Form>
            <Input
              name='username'
              label='Имя пользователя'
              placeholder='Введите имя пользователя'
            />
            <Input
              name='password'
              label='Пароль'
              type='password'
              placeholder='Введите пароль'
            />
            <div className='form-action'>
              <button className='button button_filled' type='submit'>
                Войти
              </button>
              <Link to='/registration'>Зарегистрироваться</Link>
            </div>
          </Form>
        </Formik>
      </div>
      <div className='auth-image'>
        <img src={Illustation} alt='Auth Illustation' />
      </div>
    </div>
  );
};
