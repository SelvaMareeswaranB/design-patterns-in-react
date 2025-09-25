import PropTypes from 'prop-types';


const LoadingSpinner = ({message}) => {
  return (
    <div className="loading-container">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
  )
}

export default LoadingSpinner


LoadingSpinner.propTypes={
    message:PropTypes.string.isRequired
}