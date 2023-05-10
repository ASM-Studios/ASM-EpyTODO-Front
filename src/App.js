import './App.css'

const getURL = "http://localhost:8080/get"

function MyButton() {
    return (
        <button>Click to get user list</button>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <t>Hello World!</t>
        <MyButton />
      </header>
    </div>
  )
}

export default App
