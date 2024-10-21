import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import { useNavigate } from "react-router-dom";

const LetterForm = (props) => {
  const navigate = useNavigate();
  const [newLetter, setNewLetter] = useState({
    mailboxId: 0,
    recipient: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewLetter((prevNewLetter) => ({
      ...prevNewLetter,
      [id]: value,
    }));
  };

  const handleMailboxChange = (e) => {
    const { id, value } = e.target;
    setNewLetter((prevNewLetter) => ({
      ...prevNewLetter,
      [id]: Number(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLetter);
    props.addLetter(newLetter);
    navigate(`/mailboxes/${newLetter.mailboxId}`);
    setNewLetter({ mailboxId: 0, recipient: "", message: "" });
  };

  return (
    <>
      <div className="new-form">
        <h1>New Letter</h1>
        <Label htmlFor="mailbox-selection">Select a Mailbox</Label>
        <select
          name="mailbox-selection"
          id="mailboxId"
          value={newLetter.mailboxId}
          onChange={handleMailboxChange}
        >
          {props.mailboxes.map((mailbox, idx) => (
            <option key={idx} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <Label htmlFor="recipient">Recipient</Label>
        <Input
          name="recipient"
          placeholder="Recipient Name"
          id="recipient"
          value={newLetter.recipient}
          onChange={handleChange}
        />
        <Label htmlFor="message">Message</Label>
        <textarea
          name="message"
          placeholder="Message"
          id="message"
          value={newLetter.message}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} disabled={!newLetter.mailboxId}>
          Submit
        </button>
      </div>
    </>
  );
};

export default LetterForm;
