import React from "react";
import priorityHighIcon from "../assests/icons/Img - High Priority.svg";
import priorityMediumIcon from "../assests/icons/Img - Medium Priority.svg";
import priorityLowIcon from "../assests/icons/Img - Low Priority.svg";
import priorityNoneIcon from "../assests/icons/No-priority.svg";
import urgentPriorityIcon from "../assests/icons/SVG - Urgent Priority colour.svg";
import urgentPriorityGreyIcon from "../assests/icons/SVG - Urgent Priority grey.svg";

const Card = ({ ticket }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return priorityHighIcon;
      case 3:
        return priorityMediumIcon;
      case 2:
        return priorityLowIcon;
      default:
        return priorityNoneIcon;
    }
  };

  const getUrgentPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return urgentPriorityIcon;
      default:
        return urgentPriorityGreyIcon;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{ticket.title}</h3>
        <img
          src={getUrgentPriorityIcon(ticket.priority)}
          alt={`Priority ${ticket.priority}`}
          className="priority-icon"
        />
        <img
          src={getPriorityIcon(ticket.priority)}
          alt={`Priority ${ticket.priority}`}
          className="priority-icon"
        />
      </div>
      <p>{ticket.tag.join(", ")}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default Card;