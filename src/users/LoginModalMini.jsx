
import { logg } from '/bundle-shared.js';
import useApi from '/bundle-api.js';

/**
 * LoginModalMini
**/
const LoginModalMini = (props) => {
  // logg(props, 'ishlib3js::LoginModalMini')

  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const api = useApi()

  const doPasswordLogin = async (email, password) => {
    api.postLogin({ email, password }).then((r) => {
      console.log('Logged in.')
    }).catch((err) => {
      logg(err, 'Cannot login.')
    })
  }


  return <div style={{ border: '1px solid green' }} >
    <h1>Login</h1>
    <label htmlFor='email'>Email</label>
    <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)    } />

    <label htmlFor='password'>Password</label>
    <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value) }
      onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
    />
    <button onClick={() => doPasswordLogin(email, password)} >Login</button>
  </div>
}
export default LoginModalMini