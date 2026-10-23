import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./CartContext";

const App = () => {
    return (
        <CartProvider>
         <div className="app">
            <Header />
             <Outlet />
        </div>
        </CartProvider>
        
    );
};

export default App;