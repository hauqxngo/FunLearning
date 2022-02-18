import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Message from "./Message";

/** Signup form.
 *
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routed as /signup
 *
 * Routes -> SignupForm -> Message
 */

const SignupForm = ({ signup }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState({});
  const history = useHistory();

  console.debug(
    "SignupForm",
    "signup=",
    typeof signup,
    "formData=",
    formData,
    "errors=",
    errors
  );

  /* validations array contains a function which
   * returns an obj w/ an error message
   * or something elses if there's no error.
   */
  const validations = [
    ({ username }) =>
      isRequired(username) || { username: "Username is required." },
    ({ password }) =>
      isRequired(password) || { password: "Password is required." },
    ({ firstName }) =>
      isRequired(firstName) || { firstName: "First Name is required." },
    ({ lastName }) =>
      isRequired(lastName) || { lastName: "Last Name is required." },
    ({ email }) => isRequired(email) || { email: "Email is required." },
  ];

  // function for validations
  const isRequired = (value) => {
    return value != null && value.trim().length > 0;
  };

  // returns the errors and isValid flag
  const validate = (validations, data) => {
    const errors = validations
      .map((validation) => validation(data))
      .filter((validation) => typeof validation === "object");

    return {
      isValid: errors.length === 0,
      errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
    };
  };

  // handles form submit
  async function handleSubmit(e) {
    e.preventDefault();
    let res = await signup(formData);
    if (res.success) {
      history.push("/companies");
    } else {
      setErrors(res.errors);
    }
  }

  // updates form data field
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    const { isValid, errors } = validate(validations, newData);
    setFormData(newData);
    setIsValid(isValid);
    setErrors(errors);
    setTouched({ ...touched, [name]: true });
  };

  return (
    <div className="col-md-4 col-lg-4 offset-md-3 offset-lg-4">
      <h3 className="text-success text-center">Sign Up</h3>
      <Form className="mx-5" onSubmit={handleSubmit} inline>
        <FormGroup floating>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            required
          />
          <Label for="username">Username</Label>
          {touched.username && errors.username && (
            <p className="text-danger">{errors.username}</p>
          )}
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          />
          <Label for="password">Password</Label>
          {touched.password && errors.password && (
            <p className="text-danger">{errors.password}</p>
          )}
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            required
          />
          <Label for="fname">First Name</Label>
          {touched.firstName && errors.firstName && (
            <p className="text-danger">{errors.firstName}</p>
          )}
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            required
          />
          <Label for="lname">Last Name</Label>
          {touched.lastName && errors.lastName && (
            <p className="text-danger">{errors.lastName}</p>
          )}
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label for="email">Email</Label>
          {touched.email && errors.email && (
            <p className="text-danger">{errors.email}</p>
          )}
        </FormGroup>{" "}
        {errors.length ? <Message type="danger" messages={errors} /> : null}
        <div className="col text-center my-2">
          <Button color="success" disabled={!isValid}>
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
