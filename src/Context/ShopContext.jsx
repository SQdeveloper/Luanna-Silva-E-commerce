import { createContext } from "react";
import data from '../DB/data';

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{
    const contextValue = {data};    

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;