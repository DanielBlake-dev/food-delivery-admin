import React from 'react';

import { Field, FieldAttributes } from 'formik';

export const Input: React.FC<FieldAttributes<any>> = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.label}</label>
      <Field className="base" {...props} />
    </div>
  );
};
