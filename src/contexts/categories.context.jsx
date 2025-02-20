import { createContext, useEffect, useState } from "react"
import PRODUCT from '../shop-data.js'
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});
export const CategoryProvider = ({children}) => {
const [categoriesMap, setCategoriesMap] = useState({});
useEffect(() => {
    const getCategoriesMap = async() => {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
}, [])

const value = {categoriesMap};
    return(
<CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
    
}
