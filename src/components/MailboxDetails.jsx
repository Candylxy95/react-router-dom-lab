import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  return (
    <div>
      <h1>Mailbox {selectedBox._id}</h1>
      <br />
      <h3>Details</h3>
      <br />
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
      <h1>Letters</h1>
      <br />
      {selectedLetters.length > 0 ? (
        selectedLetters.map((letter, idx) => <p key={idx}>{letter.message}</p>)
      ) : (
        <p>No letters found</p>
      )}
    </div>
  );
};

export default MailboxDetails;
