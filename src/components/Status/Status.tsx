import React from "react";

import classNames from "classnames";

type StatusesType = "Delivering" | "Completed" | "Failure" | "Waiting";
type StatusProps = {
  type: StatusesType;
};

const trnsltType = {
  Waiting: "Ожидает доставки",
  Delivering: "Доставляеться",
  Completed: "Доставлено",
  Failure: "Отказ",
};

export const Status: React.FC<StatusProps> = ({ type }) => {
  return (
    <div className={classNames("delivery-status", type)}>
      {trnsltType[type]}
    </div>
  );
};
