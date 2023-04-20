export const registerUser = async (user) => {
  const res = await fetch("http://localhost:4000/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user
    })
  });
  const data = await res.json();
  return data;
};

export const loginUser = async (user) => {
  const {
    email,
    password
  } = user;
  const res = await fetch("http://localhost:4000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user
    })
  });
  const data = await res.json();
  return data;
};

/* const getTodos = async () => {
  const res = await fetch("http://localhost:4000/gettodos");
  const data = await res.json();

  if (data.ok) {
    dispatch({ type: todoTypes.getTodos, payload: data.todos });
  }
}; */