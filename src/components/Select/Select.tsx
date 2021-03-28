import React, { useState } from 'react';

import { FieldAttributes, Field, FieldProps, FormikProps } from 'formik';

import classNames from 'classnames';

type Option = {
  value: string;
  title: string;
};

type SelectProps = {
  options: Option[];
};

export const Select: React.FC<SelectProps & FieldAttributes<any>> = ({
  options,
  ...props
}) => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  const selectValue = (form: FormikProps<any>, value: string) => {
    form.setFieldValue(props.name, value);
    setOpened(false);
  };

  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.label}</label>
      <Field name={props.name}>
        {({ field, form }: FieldProps) => (
          <div id={props.name} className={classNames('select', { opened })}>
            <div onClick={toggleOpened} className="select-button base">
              {field.value || props.placeholder}
              <svg
                className="icon"
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="13.4663"
                  width="1"
                  height="10"
                  rx="0.5"
                  transform="rotate(45 13.4663 0)"
                  fill="#C4C4C4"
                />
                <rect
                  x="7.77832"
                  y="7.07104"
                  width="1"
                  height="10"
                  rx="0.5"
                  transform="rotate(135 7.77832 7.07104)"
                  fill="#C4C4C4"
                />
              </svg>
            </div>
            <div className="options">
              {options.map((option: Option) => (
                <div
                  onClick={() => selectValue(form, option.value)}
                  className="option"
                >
                  {option.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </Field>
    </div>
  );
};
