import './styleSheet/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "./pages/login"
import HomePage from "./pages/homePage"
import Register from "./pages/register"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
