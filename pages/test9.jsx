import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const PassengerSchema = Yup.object().shape({
  passengers: Yup.object().shape({
    adults: Yup.number()
      .min(1, "At least 1 adult is required")
      .max(10, "Cannot exceed 10 adults")
      .required("Required"),
    children: Yup.number()
      .min(0, "Cannot be negative")
      .max(10, "Cannot exceed 10 children")
      .required("Required"),
    infants: Yup.number()
      .min(0, "Cannot be negative")
      .max(10, "Cannot exceed 10 infants")
      .required("Required"),
  }),
});

import { FiPlus, FiMinus } from "react-icons/fi";

const CustomInput = ({ field, form, ...props }) => {
  const { name, value } = field;
  const [adults = 1, children = 0, infants = 0] = Array.isArray(value)
    ? value
    : [1, 0, 0];
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue =
      name === "adults"
        ? [Number(value), children, infants]
        : name === "children"
        ? [adults, Number(value), infants]
        : [adults, children, Number(value)];
    form.setFieldValue(field.name, newValue);
  };
  const increaseValue = (name) => {
    const currentValue =
      name === "adults" ? adults : name === "children" ? children : infants;
    const newValue = currentValue + 1;
    handleChange({ target: { name, value: newValue } });
  };
  const decreaseValue = (name) => {
    const currentValue =
      name === "adults" ? adults : name === "children" ? children : infants;
    const newValue = currentValue > 0 ? currentValue - 1 : 0;
    handleChange({ target: { name, value: newValue } });
  };
  return (
    <div>
      <label htmlFor={field.name}>{props.label}</label>
      <div className="passenger-input">
        <div className="passenger-label">Adults</div>
        <div className="passenger-controls">
          <button
            type="button"
            className="passenger-button"
            onClick={() => decreaseValue("adults")}
          >
            <FiMinus />
          </button>
          <input
            type="number"
            id={`${name}-adults`}
            name="adults"
            value={adults}
            onChange={handleChange}
            min="1"
            max="10"
          />
          <button
            type="button"
            className="passenger-button"
            onClick={() => increaseValue("adults")}
          >
            <FiPlus />
          </button>
        </div>
        <div className="passenger-label">Children</div>
        <div className="passenger-controls">
          <button
            type="button"
            className="passenger-button"
            onClick={() => decreaseValue("children")}
          >
            <FiMinus />
          </button>
          <input
            type="number"
            id={`${name}-children`}
            name="children"
            value={children}
            onChange={handleChange}
            min="0"
            max="10"
          />
          <button
            type="button"
            className="passenger-button"
            onClick={() => increaseValue("children")}
          >
            <FiPlus />
          </button>
        </div>
        <div className="passenger-label">Infants</div>
        <div className="passenger-controls">
          <button
            type="button"
            className="passenger-button"
            onClick={() => decreaseValue("infants")}
          >
            <FiMinus />
          </button>
          <input
            type="number"
            id={`${name}-infants`}
            name="infants"
            value={infants}
            onChange={handleChange}
            min="0"
            max="10"
          />
          <button
            type="button"
            className="passenger-button"
            onClick={() => increaseValue("infants")}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

const PassengerForm = () => {
  return (
    <div>
      <h1>Passenger Form</h1>
      <Formik
        initialValues={{
          passengers: {
            adults: 1,
            children: 0,
            infants: 0,
          },
        }}
        validationSchema={PassengerSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values.passengers);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              component={CustomInput}
              label="Passengers"
              name="passengers"
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PassengerForm;
