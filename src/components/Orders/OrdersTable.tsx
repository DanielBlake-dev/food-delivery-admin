import React, { useEffect, useState } from "react";
import { adminAPI, User } from "../../api/api";
import { DeliveryStatus, resourcesAPI } from "../../api/resourcesAPI";

import DishImage from "../../assets/dish.png";
import { Status } from "../Status/Status";

export const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<any>([]);
  const [user, setUser] = useState<User | null>(null);

  const fetch = async () => {
    const user = await adminAPI.getMe();

    if (user.role === "Courier") {
      const { orders } = await resourcesAPI.getOrdersByStatus(
        DeliveryStatus.Waiting
      );

      setOrders(orders);
    } else if (user.role === "Admin") {
      const { orders } = await resourcesAPI.getOrders();

      setOrders(orders);
    }

    setUser(user);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleChangeStatus = async (id: string) => {
    const status = "Delivering";
    await resourcesAPI.setOrderStatus({ id, status });
    fetch();
  };

  return orders ? (
    <table className='checkout__table'>
      <thead className='checkout__head'>
        <tr>
          <th>Блюдо</th>
          <th>Кол-во</th>
          <th>Всего</th>
          <th>Статус</th>
          <th>Адрес</th>
          <th></th>
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
              {user && user.role !== "Admin" ? (
                <td>
                  <button
                    onClick={() => handleChangeStatus(order._id)}
                    className='button button_filled'>
                    Доставлять
                  </button>
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
};
