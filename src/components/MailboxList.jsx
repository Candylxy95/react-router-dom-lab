import React from "react";
import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <ul>
      {props.mailboxes.map((mailbox) => (
        <li key={mailbox._id}>
          <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MailboxList;
