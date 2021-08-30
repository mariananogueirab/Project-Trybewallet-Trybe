import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, label, value, name, minLength=0, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <input
            type={ type }
            value={ value }
            name={ name }
            data-testid={ `${name}-input` }
            minLength={ minLength }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
