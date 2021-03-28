import React, { useEffect, useState } from "react";
import { Indredient, resourcesAPI } from "../../api/resourcesAPI";

export const IngredientsTable = () => {
  const [ingredients, setIngredients] = useState<Indredient[]>([]);

  const fetch = async () => {
    setIngredients(await resourcesAPI.getFood());
  };

  useEffect(() => {
    fetch();
  }, []);

  return ingredients ? (
    <table className='checkout__table'>
      <thead className='checkout__head'>
        <tr>
          <th>Идентификатор</th>
          <th>Название</th>
        </tr>
      </thead>
      <tbody className='checkout__body'>
        {ingredients.map((ingredient) => (
          <tr>
            <td>
              <div className='checkout-dish'>
                <div className='checkout-dish__info'>
                  <h3 className='name'>{ingredient._id}</h3>
                </div>
              </div>
            </td>
            <td>
              <p className='checkout-total'>{ingredient.name}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};
