import React from "react";

/** Shows messaging alerts after handling forms.
 *
 * { LoginForm, SignupForm, ProfileForm } -> Message
 */

const Message = ({ type = "danger", messages = [] }) => {
  return (
    <div className={`alert alert-${type} mt-3`} role="alert">
      {messages.map((err) => (
        <p className="mb-0 small" key={err}>
          {err}
        </p>
      ))}
    </div>
  );
};

export default Message;
