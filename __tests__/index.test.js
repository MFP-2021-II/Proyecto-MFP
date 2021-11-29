/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Login from "../pages/login/index";

test("Renders content Login", () => {
  const login = {
    content: "login test",
    important: true,
  };

  const component = render(<Login login={login} />);
  console.log(component);
});
