import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={(event) => onFilterChange(event.target.value)}
    />
  );
  
  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };
  
  export default Filter;