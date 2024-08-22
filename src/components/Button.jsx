import PropTypes from "prop-types";
import "../button.css"; // Assume this file contains relevant styling

const Button = ({ type, children }) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
