import { useEffect } from "react";

export function useTitle(openItem) {
    useEffect(() => {
        openItem ? document.title = openItem.name : document.title = "MrDonald's";
    }, [openItem])
}
