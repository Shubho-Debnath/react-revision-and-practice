import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    console.log(data);
  }

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div>
          <label>Full Name</label>
          <br />

          <input
            type="text"
            className={errors.fullName ? "input-error" : ""}
            {...register("fullName", {
              required: "Full Name is required",
              minLength: {
                value: 2,
                message: "Min 2 letters required",
              },
            })}
          />

          {errors.fullName && (
            <p style={{ color: "red" }}>{errors.fullName.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label>Age</label>
          <br />

          <input
            type="number"
            className={errors.age ? "input-error" : ""}
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "Min age is 18",
              },
            })}
          />

          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <br />

          <input
            type="password"
            className={errors.password ? "input-error" : ""}
            {...register("password", {
              required: "Password is required",

              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                message:
                  "Password must contain uppercase, lowercase, number and special character",
              },

              minLength: {
                value: 8,
                message: "Minimum password length is 8",
              },
            })}
          />

          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <input
          className="submit-btn"
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
    </div>
  );
};

export default App;
