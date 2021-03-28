import React, { useState } from "react";

import { FieldAttributes, Field, FieldProps, FormikProps } from "formik";

import classNames from "classnames";

type Option = {
  value: string;
  title: string;
};

type SelectManyProps = {
  options: Option[];
};

type TagProps = {
  tag: Option;
  onDelete: () => void;
};

const Tag: React.FC<TagProps> = ({ tag, onDelete }) => {
  return (
    <div className='select-tag' onClick={onDelete}>
      {tag.title} <span className='remove' onClick={onDelete}></span>
    </div>
  );
};

export const SelectMany: React.FC<SelectManyProps & FieldAttributes<any>> = ({
  options,
  ...props
}) => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option[]>([]);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  const deleteValue = (
    form: FormikProps<any>,
    fieldValue: string[],
    option: Option
  ) => () => {
    setSelectedOption(selectedOption.filter((o) => o.value !== option.value));
    form.setFieldValue(
      props.name,
      fieldValue.filter((v) => v !== option.value)
    );
  };

  const selectValue = (
    form: FormikProps<any>,
    fieldValue: string[],
    option: Option
  ) => {
    setSelectedOption((tag) => [...tag, option]);
    form.setFieldValue(props.name, [...fieldValue, option.value]);
    setOpened(false);
  };

  return (
    <div className='input-container select-many'>
      <label htmlFor={props.name}>{props.label}</label>
      <Field name={props.name}>
        {({ field, form }: FieldProps) => (
          <div id={props.name} className={classNames("select", { opened })}>
            <div onClick={toggleOpened} className='select-button base'>
              <div className='select-button__content'>
                {selectedOption.length
                  ? selectedOption.map((tag) => (
                      <Tag
                        onDelete={deleteValue(form, field.value, tag)}
                        tag={tag}
                      />
                    ))
                  : props.placeholder}
              </div>
              <svg
                onClick={toggleOpened}
                className='icon'
                width='15'
                height='8'
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  x='13.4663'
                  width='1'
                  height='10'
                  rx='0.5'
                  transform='rotate(45 13.4663 0)'
                  fill='#C4C4C4'
                />
                <rect
                  x='7.77832'
                  y='7.07104'
                  width='1'
                  height='10'
                  rx='0.5'
                  transform='rotate(135 7.77832 7.07104)'
                  fill='#C4C4C4'
                />
              </svg>
            </div>
            <div className='options'>
              {options.map((option: Option) => (
                <div
                  onClick={() => selectValue(form, field.value, option)}
                  className='option'>
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
