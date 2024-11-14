import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";
import NavBar from "../components/NavBar";

const MainLayOut = () => {
    return (
        <div className="font-poppins">
             <header className="w-11/12 mx-auto">
             <Header></Header>
             <LatesNews></LatesNews>
             </header>
             {/* this is navBar section  */}
             <nav className=" w-11/12 mx-auto">
                <NavBar></NavBar>

             </nav>
             {/* this is main section */}
             <main>
               <div className="grid grid-cols-1 md:grid-cols-12 w-11/12 mx-auto mt-12">
               <aside className="col-span-3"> this right</aside>
                <main className="col-span-6">this is center</main>
                <aside className="col-span-3"> this is left</aside>
               </div>
             </main>
             {/* this is footer */} 
             <footer></footer>
            <Outlet></Outlet> 
            
        </div>
    );
};

export default MainLayOut;