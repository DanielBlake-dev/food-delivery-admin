import React, { useEffect, useState } from "react";

import { Formik, Form } from "formik";

import { Input } from "../Input/Input";
import { SelectMany } from "../SelectMany/SelectMany";
import { Indredient, resourcesAPI } from "../../api/resourcesAPI";
import { useHistory } from "react-router-dom";

export const DishesCreate = () => {
  const [food, setFood] = useState<Indredient[]>([]);

  const history = useHistory();

  const mapFoodToOptions = () => {
    if (!food) return [];

    return food.map((f) => ({
      value: f._id,
      title: f.name,
    }));
  };

  const fetch = async () => {
    setFood(await resourcesAPI.getFood());
  };

  const handleSubmit = async (values: any) => {
    const data = new FormData();
    data.append("file", values.file);
    console.log(data);
    resourcesAPI.upload(data);
    resourcesAPI.createDish(values).then(() => {
      history.goBack();
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        price: 0,
        ingredients: [],
        file: "",
      }}>
      {(formik) => {
        return (
          <Form>
            <Input
              name='name'
              label='Название'
              placeholder='Введите названием'
            />
            <Input name='price' label='Цена' placeholder='Введите цену' />
            <SelectMany
              name='ingredients'
              options={mapFoodToOptions()}
              placeholder='Выберете ингредиент'
            />
            <button className='button button_filled' type='submit'>
              Создать
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
