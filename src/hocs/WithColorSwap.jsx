import  '../styles/colorSwap.css'

export const WithColorSwap = (Component) => (props) => {
    return (
      <div className="color-swap">
        <Component {...props} />
      </div>
    );
  };