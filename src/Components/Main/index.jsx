import {Route, Routes} from "react-router-dom";
import {Routers} from "../../Constants/Router.jsx";
import HomePage from "../../Pages/Home/index.jsx";
import TableForm from "../../Pages/Form/index.jsx";
import Header from "../Header/index.jsx";


const Main = () => {
    return (
        <>
            <Header/>
            <Routes>

                <Route path={Routers.Home} element={<HomePage/>}/>
                <Route path={Routers.Table} element={<TableForm/>}/>
            </Routes>
        </>
    )
}

export default Main;