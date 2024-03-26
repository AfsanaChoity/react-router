import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    return (
        <div>
            <h2>This is Home</h2>
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loading.........</p> :
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;