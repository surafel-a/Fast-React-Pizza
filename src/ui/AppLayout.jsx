import Header from "./Header";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

export default function AppLayout(){
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    
    return(
        <div className="grid grid-rows-[auto_1fr_auto] h-[100dvh]">
            { isLoading && <Loader /> }
            <Header />
            <div className="overflow-scroll my-10">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>
            
                <CartOverview />
        </div>
    )
}