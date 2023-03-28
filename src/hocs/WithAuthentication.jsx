import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const WrappedComponent = (props) => {
    console.log(props)
    const { Component } = props;
    const authenticated = useContext(AuthContext);
  
    return authenticated ? <Component {...props} /> : <Navigate to="/" />;
  };

  export const WithAuthentication = (Component) => (props) => {
    return <WrappedComponent {...props} Component={Component} />;
  };