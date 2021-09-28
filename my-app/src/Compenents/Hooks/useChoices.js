import { useState } from "react";

export const useChoices = (openItem) => {
    const [choice, setChoices] = useState(openItem.choosen ? openItem.choosen : openItem.choices && openItem.choices[0]);

    const changeChoices = e => {
        setChoices(e.target.value);
    }

    return {choice, changeChoices};
}