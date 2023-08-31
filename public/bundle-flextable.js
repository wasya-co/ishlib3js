import { logg } from '../../../../../../bundle-shared.js';
import useApi from '../../../../../../bundle-api.js';
import LoginModalMini from '../../../../../../bundle-login_modal_mini.js';

/**
 * Flextable
 *
 * foto, name, rating, rating1, comments, and more info
**/
const Flextable = props => {
  // logg(props, 'Flextable');

  const api = useApi();

  // documentation for all of this
  // login
  // get the data
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    api.getLeads({
      tag_slug: '202307-MDE'
    }).then(r => r.json).then(inns => {
      logg(inns, 'inns');
      setData(inns);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LoginModalMini, null), "Data: ", data);
};

export { Flextable as default };
//# sourceMappingURL=bundle-flextable.js.map
