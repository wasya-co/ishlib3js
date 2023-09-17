
import { logg } from '/bundle-shared.js';
import { useApi } from '/bundle-api.js';

const { LineChart, XAxis, YAxis, Line, CartesianGrid, } = Recharts;

/**
 * A main app.
**/
const AppKpiSentContexts = (props) => {
  logg(props, 'AppKpiSentContexts')
  const {
    // symbol, fromDate, toDate,
  } = props

  const [data, setData] = React.useState([])

  const api = useApi()

  React.useEffect(() => {
    api.getKpiSentContexts().then((r) => {
      logg(r, 'r')
      setData(r)
    })
  }, [])

  return <div>
    <h5>Kpi Sent Contexts</h5>
    <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="_id"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
  </div>
}
export default AppKpiSentContexts

