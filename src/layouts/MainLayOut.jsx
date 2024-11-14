import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";
import NavBar from "../components/NavBar";
import LeftContent from "../components/LayoutComponents/LeftContent";
import RightCon from "../components/layoutComponents/RightCon";

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
               <aside className="col-span-3"> 
                <LeftContent></LeftContent>
               </aside>
                <main className="col-span-6">
                    <Outlet></Outlet>
                </main>
                <aside className="col-span-3"> 
                    <RightCon></RightCon>
                </aside>
               </div>
             </main>
             {/* this is footer */} 
             <footer></footer>
            
        </div>
    );
};

export default MainLayOut;