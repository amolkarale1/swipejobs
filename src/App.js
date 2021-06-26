import React from "react"
import JobContext from "./context/JobContext"
import WorkerProfile from "./components/WorkerProfile"
import './App.css'
function App() {
    return (<JobContext>
      <WorkerProfile/>
    </JobContext>)
}

export default App