import { useEffect, useState } from "react";
import { GridDropZone, GridDropZoneProps } from "react-grid-dnd";

export const StrictModeDropzone = ({ children, ...props }: GridDropZoneProps) => {
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);
    if (!enabled) {
        return null;
    }
    return <GridDropZone {...props}>{children}</GridDropZone>;
};