import PropTypes from "prop-types";
const Separator = ({ text = "or" }) => {
  return (
    <div className="flex items-center gap-2 my-1">
      <div className="h-px flex-1 bg-neutral-300"></div>
      <span className="text-neutral-600 text-sm font-medium">{text}</span>
      <div className="h-px flex-1 bg-neutral-300"></div>
    </div>
  );
};

Separator.propTypes = {
  text: PropTypes.string,
};

export default Separator;
