import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, datas = [], label } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <select name={ name } id={ name }>
          {datas.map((data, index) => <option key={ index }>{data}</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  datas: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
