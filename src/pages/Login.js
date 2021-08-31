import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { setUser } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassordChange = this.handlePassordChange.bind(this);
    this.onSubmmitClick = this.onSubmmitClick.bind(this);
  }

  onSubmmitClick() {
    const { history, getEmail } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    getEmail(email);
  }

  handleEmailChange({ target }) {
    const { email } = this.state;
    const emailPath = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    this.setState({
      validEmail: emailPath.test(email),
      email: target.value,
    });
  }

  handlePassordChange({ target }) {
    const MIN_LENGTH_PSSW = 6;
    this.setState({
      password: target.value,
      validPassword: target.value.length >= MIN_LENGTH_PSSW,
    });
  }

  render() {
    const { email, password, validEmail, validPassword } = this.state;
    return (
      <form className="form">
        <Input
          type="email"
          label="E-mail:"
          value={ email }
          name="email"
          onChange={ this.handleEmailChange }
        />

        <Input
          type="text"
          label="Senha:"
          value={ password }
          name="password"
          onChange={ this.handlePassordChange }
          minLength="6"
        />

        <button
          type="button"
          onClick={ this.onSubmmitClick }
          disabled={ !validEmail || !validPassword }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  getEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (payload) => dispatch(setUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
