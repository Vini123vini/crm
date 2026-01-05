import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Leads() {
  const [leads, setLeads] = useState({
    "New": [
      { id: "1", title: "ABC Corp - Follow up", priority: "high" },
      { id: "2", title: "XYZ Ltd - New Lead", priority: "medium" }
    ],
    "Contacted": [
      { id: "3", title: "PQR Inc - Contacted", priority: "low" }
    ],
    "Closed": []
  });

  const priorities = {
    high: "#f87171", // red
    medium: "#fbbf24", // yellow
    low: "#34d399" // green
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceList = [...leads[source.droppableId]];
    const destList = [...leads[destination.droppableId]];
    const [moved] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, moved);

    setLeads({
      ...leads,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList
    });
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(leads).map((status) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  backgroundColor: "#f3f4f6",
                  padding: "10px",
                  borderRadius: "10px",
                  width: "250px",
                  minHeight: "300px"
                }}
              >
                <h3>{status}</h3>
                {leads[status].map((lead, index) => (
                  <Draggable draggableId={lead.id} index={index} key={lead.id}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: "10px",
                          margin: "5px 0",
                          borderRadius: "5px",
                          backgroundColor: priorities[lead.priority],
                          color: "white",
                          ...provided.draggableProps.style
                        }}
                      >
                        {lead.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default Leads;
