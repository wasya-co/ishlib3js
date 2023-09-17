

import { logg } from '/bundle-shared.js';
import useApi from '/bundle-api.js';
import LoginModalMini from '/bundle-login_modal_mini.js';

/**
 * Flextable, a main app
 *
 * foto, name, rating, rating1, comments, and more info
**/
const AppFlextable = (props) => {
  // logg(props, 'Flextable');

  const api = useApi()

  // documentation for all of this
  // login
  // get the data
  const [ data, setData ] = React.useState([])
  React.useEffect(() => {
    api.getLeads({ tag_slug: '202307-MDE' }).then(inns => {
      logg(inns, 'inns')

      setData(inns)
    })
  }, [])

  return <div>
    <LoginModalMini />

    <table>
      <tr>
        <th>Photo</th>
        <th>Name</th>
        <th>Rating</th>
        <th>Rating1</th>
        <th>Comments</th>
        <th>More info</th>
      </tr>
      { data.map((i,idx) => <tr key={idx} >
        <td>{ i.photo }</td>
        <td>{ i.name }</td>
        <td>{ i.rating }</td>
        <td>{ i.rating1 }</td>
        <td>{ i.comments }</td>
        <td>{ i.more_info }</td>
      </tr> )}
    </table>

  </div>

}
export default AppFlextable
