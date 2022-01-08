import { loginSchema } from "schemas/login";

describe("Validate if the loginSchema renders", () => {
  //use login Schema to validate the login form from yup.object
  it("loginSchema", () => {
    const login = {
      email: "carlos@gmail.com",
      password: "12345678",
    };
    expect(loginSchema.isValidSync(login)).toBe(false);
  });
});
