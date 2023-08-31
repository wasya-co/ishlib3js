import { logg } from '../../../../../../../bundle-shared.js';
import useApi from '../../../../../../../bundle-api.js';

/**
 * LoginModalMini
**/
const LoginModalMini = props => {
  // logg(props, 'ishlib3js::LoginModalMini')

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const api = useApi();
  const doPasswordLogin = async (email, password) => {
    api.postLogin({
      email,
      password
    }).then(r => {
      console.log('Logged in.');
    }).catch(err => {
      logg(err, 'Cannot login.');
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid green'
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Login"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    name: "password",
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        doPasswordLogin(email, password);
      }
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => doPasswordLogin(email, password)
  }, "Login"));
};

export { LoginModalMini as default };
//# sourceMappingURL=bundle-login_modal_mini.js.map
