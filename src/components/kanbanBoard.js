import React from "react";
import Card from "./KanbanCard";
import backlogIcon from "../assests/icons/Backlog.svg";
import cancelledIcon from "../assests/icons/Cancelled.svg";
import doneIcon from "../assests/icons/Done.svg";
import inProgressIcon from "../assests/icons/in-progress.svg";

const Board = ({ groupedTickets }) => {
  return (
    <div className="board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="group">
          <div className="group-header">
            <h2>{group}</h2>
            {group === "Backlog" && <img src={backlogIcon} alt="Backlog" />}
            {group === "Cancelled" && <img src={cancelledIcon} alt="Cancelled" />}
            {group === "In Progress" && <img src={inProgressIcon} alt="In Progress" />}
            {group === "Done" && <img src={doneIcon} alt="Done" />}
          </div>
          <div className="cards">
            {groupedTickets[group].map((ticket) => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;