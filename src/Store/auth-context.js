import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const remTime = (expTime) => {
    const currentTime = new Date().getTime();
    const adjExpTime = new Date(expTime).getTime();

    const remTime = adjExpTime - currentTime;
    return remTime
}

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token")
  const [token, setToken] = React.useState(initialToken);
  const userIsLoggedIn = !!token;
  
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token")
  };

  const loginHandler = (token,exptime) => {
    setToken(token);
    localStorage.setItem("token",token);

    // const remainingTime = remTime(exptime)
    // setTimeout(logoutHandler,remainingTime)
  };

  

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return(
  <AuthContext.Provider value={contextValue}>
    {props.children}
  </AuthContext.Provider>
  );
};

export default AuthContext;
