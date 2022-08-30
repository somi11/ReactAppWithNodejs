import './App.css'
import AddQuestion from './components/addquestion/addQuestion.component'
const questionsData = []

function App() {
  return (
    <div className="App">
      <h1>Questions App</h1>
      <AddQuestion questionsList={questionsData}></AddQuestion>
    </div>
  )
}

export default App
