import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmmitClick = this.onSubmmitClick.bind(this);
  }

  onSubmmitClick() {
    const { history } = this.props;
    history.push('/carteira');
    console.log(history);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <Input
          type="email"
          label="E-mail:"
          value={ email }
          name="email"
          onChange={ this.handleChange }
        />

        <Input
          type="text"
          label="Senha:"
          value={ password }
          name="password"
          onChange={ this.handleChange }
          minLength="6"
        />

        <button type="button" onClick={ this.onSubmmitClick }>Entrar</button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Login;
