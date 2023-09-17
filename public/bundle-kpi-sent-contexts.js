import { logg } from '../../../../../../bundle-shared.js';
import { useApi } from '../../../../../../bundle-api.js';

const {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid
} = Recharts;

/**
 * A main app.
**/
const AppKpiSentContexts = props => {
  logg(props, 'AppKpiSentContexts');
  const [data, setData] = React.useState([]);
  const api = useApi();
  React.useEffect(() => {
    api.getKpiSentContexts().then(r => {
      logg(r, 'r');
      setData(r);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Kpi Sent Contexts"), /*#__PURE__*/React.createElement(LineChart, {
    width: 500,
    height: 300,
    data: data
  }, /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "_id"
  }), /*#__PURE__*/React.createElement(YAxis, null), /*#__PURE__*/React.createElement(CartesianGrid, {
    stroke: "#eee",
    strokeDasharray: "5 5"
  }), /*#__PURE__*/React.createElement(Line, {
    type: "monotone",
    dataKey: "total",
    stroke: "#82ca9d"
  })));
};

export { AppKpiSentContexts as default };
