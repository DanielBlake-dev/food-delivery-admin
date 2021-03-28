import React from "react";
import { Link } from "react-router-dom";
import { IngredientsTable } from "./IngredientsTable";

export const IngredientsView = () => {
  return (
    <>
      <div className='resource-actions'>
        <h2 className='section-title'>Ингредиенты</h2>
        <Link to='/ingredients/create'>
          <button className='button button_filled'>Добавить ингредиент</button>
        </Link>
      </div>
      <IngredientsTable />
    </>
  );
};
