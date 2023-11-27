import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const TestLayout = () => {
    return ( 
        <div className="root-layout">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default TestLayout;