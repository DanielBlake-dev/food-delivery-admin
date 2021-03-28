import React from "react";

import { Formik, Form } from "formik";

import { Input } from "../Input/Input";
import { resourcesAPI } from "../../api/resourcesAPI";
import { useHistory } from "react-router-dom";

export const IngredientsCreate = () => {
  const history = useHistory();

  const handleSubmit = (values: any) => {
    resourcesAPI.createFood(values).then(() => {
      history.goBack();
    });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
      }}>
      <Form>
        <Input name='name' label='Название' placeholder='Введите названием' />
        <button className='button button_filled' type='submit'>
          Создать
        </button>
      </Form>
    </Formik>
  );
};
