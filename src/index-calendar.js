
import config from "/config.js"
import { C, logg } from '/bundle-shared.js'
import { useApi } from '/bundle-api.js'

import Calendar from "https://cdnjs.cloudflare.com/ajax/libs/react-big-calendar/1.8.3/react-big-calendar.min.js"

// import withDragAndDrop from "https://unpkg.com/react-big-calendar@1.8.2/lib/addons/dragAndDrop/withDragAndDrop.js"
// const DnDCalendar = withDragAndDrop(Calendar)
// const localizer = momentLocalizer(moment)

class App extends React.Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  }

  onEventResize = (data) => {
    const { start, end } = data

    this.setState((state) => {
      state.events[0].start = start
      state.events[0].end = end
      return { events: [...state.events] }
    })
  }

  onEventDrop = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <Calendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          // localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    )
  }
}

export default App

