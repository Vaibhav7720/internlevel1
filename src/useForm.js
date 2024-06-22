import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "",
    guestName: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.age) {
      errors.age = "Age is required";
    } else if (values.age <= 0) {
      errors.age = "Age must be greater than 0";
    }

    if (!values.attendingWithGuest) {
      errors.attendingWithGuest =
        "Please select if you are attending with a guest";
    }

    if (values.attendingWithGuest === "Yes" && !values.guestName) {
      errors.guestName = "Guest Name is required if attending with a guest";
    }

    return errors;
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
