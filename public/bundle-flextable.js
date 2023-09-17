import { logg } from '../../../../../../bundle-shared.js';
import useApi from '../../../../../../bundle-api.js';
import LoginModalMini from '../../../../../../bundle-login_modal_mini.js';

/**
 * Flextable, a main app
 *
 * foto, name, rating, rating1, comments, and more info
**/
const AppFlextable = props => {
  // logg(props, 'Flextable');

  const api = useApi();

  // documentation for all of this
  // login
  // get the data
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    api.getLeads({
      tag_slug: '202307-MDE'
    }).then(inns => {
      logg(inns, 'inns');
      setData(inns);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LoginModalMini, null), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Photo"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Rating"), /*#__PURE__*/React.createElement("th", null, "Rating1"), /*#__PURE__*/React.createElement("th", null, "Comments"), /*#__PURE__*/React.createElement("th", null, "More info")), data.map((i, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx
  }, /*#__PURE__*/React.createElement("td", null, i.photo), /*#__PURE__*/React.createElement("td", null, i.name), /*#__PURE__*/React.createElement("td", null, i.rating), /*#__PURE__*/React.createElement("td", null, i.rating1), /*#__PURE__*/React.createElement("td", null, i.comments), /*#__PURE__*/React.createElement("td", null, i.more_info)))));
};

export { AppFlextable as default };
//# sourceMappingURL=bundle-flextable.js.map
