import { useState } from "react";
import { useTitle } from "./useTitle";

export const useOpenItem = () => {
    const [openItem, setOpenItem] = useState(null);
    
    useTitle(openItem);
    
    return {openItem, setOpenItem};
}