const WithComponentNameLog = (Component) => {
    console.table('HOC invocado con el componente:', Component.name);
  
    return (props) => {
      return <Component {...props} />;
    };
  };

export default WithComponentNameLog