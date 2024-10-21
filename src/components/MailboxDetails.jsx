import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <div className="mail-box">
      <h1>Mailbox {selectedBox._id}</h1>
      <h3>Details</h3>
      <dt>Boxholder:</dt>
      <dd>{selectedBox.boxholder}</dd>
      <dt>Box Size:</dt>
      <dd>{selectedBox.boxSize}</dd>
    </div>
  );
};

export default MailboxDetails;
