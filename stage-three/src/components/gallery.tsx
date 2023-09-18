import { useState } from "react";
import { images } from "../assets";
import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from "react-beautiful-dnd";

export const Gallery = () => {

    const [characters, updateCharacters] = useState(images);

    const handleOnDragEnd: OnDragEndResponder = (result) => {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }

    return (
        <div>
            <h1>This is it</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="images">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                padding: 0,
                            }}
                            className="images"
                        >
                            {
                                images.map(({ id, name, thumb }, index) => {
                                    return (
                                        <Draggable
                                            key={id}
                                            draggableId={id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <li
                                                    style={{
                                                        margin: "0 2rem 0"
                                                    }}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <div>
                                                        <img
                                                            src={thumb} alt="bird from Rob Potter on unsplash"
                                                            style={{ width: "250px", height: "370px" }}
                                                        />
                                                    </div>
                                                </li>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}