import React from "react";

import { CompletedDeliveringTable } from "./CompletedDeliveringTable";

export const CompletedDelivering = () => {
  return (
    <>
      <h2 className='section-title'>Завершенные доставки</h2>
      <CompletedDeliveringTable />
    </>
  );
};
