type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValue: Partial<User>) {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...initialValue };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
