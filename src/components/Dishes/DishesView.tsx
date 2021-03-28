import React from "react";
import { Link } from "react-router-dom";
import { DishesTable } from "./DishesTable";

export const DishesView = () => {
  return (
    <>
      <div className='resource-actions'>
        <h2 className='section-title'>Блюда</h2>
        <Link to='/dishes/create'>
          <button className='button button_filled'>Добавить блюдо</button>
        </Link>
      </div>
      <DishesTable />
    </>
  );
};
