import React from "react";

import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Input } from "../components/Input/Input";
import { Select } from "../components/Select/Select";

import Illustation from "../assets/auth-illustation.png";
import { adminAPI } from "../api/api";

// @ts-ignore
import { NotificationManager } from "react-notifications";

const roles = [
  { value: "Admin", title: "Администратор" },
  { value: "Courier", title: "Курьер" },
];

export const Registation = () => {
  const handleSubmit = async (value: any) => {
    try {
      await adminAPI.registration(value);
      NotificationManager.success(
        "Успешная регистрация",
        "Пользователь успешно создан!"
      );
      console.log("success");
    } catch (error) {
      console.log("error");
      NotificationManager.error(
        "Ошибка",
        "Ошибка регистриции. Пользователь уже существует!"
      );
    }
  };

  return (
    <div className='auth'>
      <div className='auth-form'>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            role: "",
            password: "",
          }}>
          <Form>
            <Input name='lastName' label='Имя' placeholder='Введите имя' />
            <Input
              name='firstName'
              label='Фамилия'
              placeholder='Введите фамилию'
            />
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
            <Select
              name='role'
              label='Роль'
              options={roles}
              placeholder='Выберете роль'
            />
            <div className='form-action'>
              <button className='button button_filled' type='submit'>
                Зарегистрироваться
              </button>
              <Link to='/login' className='link'>
                Войти
              </Link>
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
