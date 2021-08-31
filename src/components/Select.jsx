import React from 'react';

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

export default Select;
