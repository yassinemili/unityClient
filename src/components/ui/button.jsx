import PropTypes from "prop-types";
function Button({ children, onClick, disabled, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: "",
};

export default Button;