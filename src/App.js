import React, { useState } from "react";
import useForm from "./useForm";

const App = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit);

  function submit() {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div>
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Are you attending with a guest?</label>
          <select
            name="attendingWithGuest"
            value={values.attendingWithGuest}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.attendingWithGuest && <p>{errors.attendingWithGuest}</p>}
        </div>
        {values.attendingWithGuest === "Yes" && (
          <div>
            <label>Guest Name:</label>
            <input
              type="text"
              name="guestName"
              value={values.guestName}
              onChange={handleChange}
            />
            {errors.guestName && <p>{errors.guestName}</p>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
