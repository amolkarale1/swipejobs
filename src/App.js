import React from "react"
import JobContext from "./context/JobContext"
import WorkerProfile from "./components/WorkerProfile"
function App() {
    return (<JobContext>
      <WorkerProfile/>
    </JobContext>)
}

export default App