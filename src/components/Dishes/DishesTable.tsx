import React, { useEffect, useState } from "react";
import { Dish, resourcesAPI } from "../../api/resourcesAPI";
import DishImage from "../../assets/dish.png";

export const DishesTable = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const fetch = async () => {
    setDishes(await resourcesAPI.getDishes());
  };

  useEffect(() => {
    fetch();
  }, []);

  return dishes ? (
    <table className='checkout__table'>
      <thead className='checkout__head'>
        <tr>
          <th>Блюдо</th>
          <th>Цена</th>
          <th>Ингредиенты</th>
        </tr>
      </thead>
      <tbody className='checkout__body'>
        {dishes.map((dish) => (
          <tr>
            <td>
              <div className='checkout-dish'>
                <img className='checkout-dish__image' src={DishImage} alt='' />
                <div className='checkout-dish__info'>
                  <h3 className='name'>{dish.name}</h3>
                </div>
              </div>
            </td>
            <td>
              <p className='checkout-total'>{dish.price} &#8372;</p>
            </td>
            <td>
              <p className='checkout-ingredients'>
                {dish.ingredients.map((i) => i.name).join(", ")}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};
