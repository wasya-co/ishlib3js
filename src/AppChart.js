

/**
 * A main app, but obsolete.
**/
const AppChart = (props) => {
  logg(props, 'AChart')
  const {
    symbol, fromDate, toDate,
  } = props

  const [data, setData] = useState([])

  useEffect(() => {
    api.getTimeseries({symbol, fromDate, toDate }).then((r) => {
      setData(r)
    })
  }, [refresh])

  return <div>
    <h5>USD to COP</h5>
    <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
  </div>
}
export default AppChart

