import React, { useEffect, useState } from "react";
import { resourcesAPI, DeliveryStatus } from "../../api/resourcesAPI";

import DishImage from "../../assets/dish.png";
import { Rating } from "../Rating/Rating";
import { Status } from "../Status/Status";

export const CompletedDeliveringTable = () => {
  const [orders, setOrders] = useState<any>([]);

  const fetch = async () => {
    const { orders } = await resourcesAPI.getOrdersByStatus(
      DeliveryStatus.Completed
    );

    setOrders(orders);
  };

  useEffect(() => {
    fetch();
  }, []);

  return orders ? (
    <table className='checkout__table'>
      <thead className='checkout__head'>
        <tr>
          <th>Блюдо</th>
          <th>Кол-во</th>
          <th>Всего</th>
          <th>Статус</th>
          <th>Адрес</th>
          <th>Рейтинг</th>
        </tr>
      </thead>
      <tbody className='checkout__body'>
        {orders.map((order: any) => {
          console.log(order);
          return (
            <tr>
              <td>
                {order.dishes.map((dish: any) => (
                  <div className='checkout-dish'>
                    <img
                      className='checkout-dish__image'
                      src={DishImage}
                      alt=''
                    />
                    <div className='checkout-dish__info'>
                      <h3 className='name'>Донер-бургер куриный</h3>
                      <p className='comment'>Без изменений</p>
                    </div>
                  </div>
                ))}
              </td>
              <td>
                {order.dishes.map((dish: any) => (
                  <div className='count'>
                    <p>{dish.count}</p>
                  </div>
                ))}
              </td>
              <td>
                <p className='checkout-total'>{order.total} &#8372;</p>
              </td>
              <td>
                <Status type={order.status} />
              </td>
              <td>
                <p className='checkout-address'>ул. Академика Вильямса 59/5</p>
              </td>
              <td>
                <Rating filledStars={4} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
};
