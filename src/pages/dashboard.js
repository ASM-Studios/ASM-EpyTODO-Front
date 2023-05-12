import { checkToken } from "../utils/checks"
import '../styleSheet/App.css'
import '../styleSheet/background.css'
import '../styleSheet/button.css'
import '../styleSheet/form.css'
import '../styleSheet/text.css'

const Dashboard = () => {
    checkToken()

    return (
        <div className={"Dashboard-page-background"}>
        </div>
    );
}

export default Dashboard