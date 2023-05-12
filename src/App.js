import './styleSheet/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Footer from "./footer"
import Header from "./header"
import Login from "./pages/login"
import HomePage from "./pages/homePage"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App