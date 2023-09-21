import { useState } from 'react';
import { GridContextProvider, GridItem, swap } from 'react-grid-dnd';
import { images } from '../assets';
import { StrictModeDropzone } from '../config/dropzone';

export const Gallery = () => {

    type OnChange = (sourceId: string, sourceIndex: number, targetIndex: number, targetId?: string) => void;

    const [items, setItems] = useState(images);

    const onChange: OnChange = (sourceId, sourceIndex, targetIndex) => {
        const nextState = swap(items, sourceIndex, targetIndex);
        setItems(nextState);
    }

    return (
        <GridContextProvider onChange={onChange}>
            <StrictModeDropzone
                id="items"
                boxesPerRow={4}
                rowHeight={370}
                style={{ height: "1200px", maxWidth: "90%", gap:"4rem" }}
            >
                {items.map((item, i) => (
                    <GridItem
                        key={item.id}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            src={item.thumb}
                            alt={item.name}
                        />
                    </GridItem>
                ))}
            </StrictModeDropzone>
        </GridContextProvider>
    )
}
