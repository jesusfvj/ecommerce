import { useEffect, createContext, useReducer } from "react";
import { useContext } from "react";
import { loginUser, registerUser } from "../../API/UserApi/UserApi";
import { userTypes } from "../Types/userTypes";
import { userReducer } from "./UserReducer";

export const UserContext = createContext();

export const useUser = () => {
  const state = useContext(UserContext);
  return state;
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    user
  };
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState.user));
  }, [userState.user]);

  const login = async (user) => {
    const response = await loginUser(user);
    if (response.ok) {
      const { fullName, email } = response.user;
      dispatch({ type: userTypes.login, payload: { email, fullName } });
      return response
    } else {
      console.log(response)
    }
  };

  const register = async (user) => {
    const response = await registerUser(user);
    if(response.ok){
      const { name, lastName, email } = response;
      dispatch({ type: userTypes.register, payload: { name, lastName, email } });
      return response
    } else {
      console.log(response)
    }
  };

  const logout = () => {
    dispatch({ type: userTypes.logout });
  };

  return (
    <UserContext.Provider
      value={{
        ...userState,
        login,
        logout,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
