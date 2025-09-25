import PropTypes from "prop-types";

const ErrorMessage = ({ title, message, onRetry }) => {
  return (
    <div className="error-container">
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};
