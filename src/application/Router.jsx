import { BrowserRouter, Route, Routes} from "react-router"
import App from "../App"
import Discover from "../pages/Discover"
import Join from "../pages/Join"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/src/pages/Discover.jsx" element={<Discover/>}/>
                <Route path="/Join" element={<Join/>}/>
            </Routes>

        </BrowserRouter>

    )

}

export default Router