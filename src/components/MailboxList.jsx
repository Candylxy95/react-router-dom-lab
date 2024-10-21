import React from "react";
import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <ul>
      {props.mailboxes.length > 0 ? (
        props.mailboxes.map((mailbox) => (
          <li className="mail-box" key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
        ))
      ) : (
        <h1>No mailboxes available</h1>
      )}
    </ul>
  );
};

export default MailboxList;
