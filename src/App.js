import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Footer from "./components/Footer";

const App = () => {
    return (
        <CartProvider>
         <div className="app">
            <Header />
             <Outlet />
            <Footer />
        </div>
        </CartProvider>
        
    );
};

export default App;