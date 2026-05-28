Pick and Omit help create smaller versions of an existing interface without rewriting code.
Pick selects specific properties:
type UserInfo = Pick<User, "name" | "email">;
Omit removes specific properties:
type PublicUser = Omit<User, "password">;
These utility types help keep code DRY (Don’t Repeat Yourself), clean, and easier to maintain.