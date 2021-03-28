import React, { useEffect, useState } from "react";
import { OrdersTable } from "./OrdersTable";

export const Orders = () => {
  return (
    <>
      <h2 className='section-title'>Заказы</h2>
      <OrdersTable />
    </>
  );
};
