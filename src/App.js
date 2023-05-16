import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Footer from "./footer"
import Header from "./header"
import Login from "./pages/login"
import HomePage from "./pages/homePage"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import Profile from "./pages/profile"
import Todo from "./pages/todoPage"
import Update from "./pages/updateUser"
import CreateTodo from "./pages/createTodo"

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/todos/:id" element={<Todo />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/createTodo" element={<CreateTodo />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App