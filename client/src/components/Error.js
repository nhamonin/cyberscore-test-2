import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span class="block sm:inline">{error}</span>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
