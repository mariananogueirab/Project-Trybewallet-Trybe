import React from 'react';
import PropTypes from 'prop-types';

class SelectApi extends React.Component {
  render() {
    const { name, data = [], label, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select name={ name } id={ name } onChange={ onChange }>
          {data.map((currency, index) => <option key={ index }>{currency}</option>)}
        </select>
      </label>
    );
  }
}

SelectApi.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectApi;
