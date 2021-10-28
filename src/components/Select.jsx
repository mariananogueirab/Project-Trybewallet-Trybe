import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, data = [], label, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select name={ name } id={ name } onChange={ onChange }>
          {data.map((type, index) => <option key={ index }>{type}</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
