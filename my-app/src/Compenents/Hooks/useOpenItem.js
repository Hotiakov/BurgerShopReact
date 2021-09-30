import { useState, useEffect } from "react";

export const useOpenItem = () => {
    const [openItem, setOpenItem] = useState(null);

    useEffect(() => {
        if(openItem){
            document.title = openItem.name;
        } else {
            document.title = "MRDonalds";
        }
    }, [openItem]);

    return {openItem, setOpenItem};
}