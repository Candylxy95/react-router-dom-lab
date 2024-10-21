import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Label from "./Label";

const MailboxForm = (props) => {
  const navigate = useNavigate();
  const [newMailbox, setNewMailbox] = useState({
    _id: "",
    boxSize: "small",
    boxholder: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target; //grab the id and value of target in this case boxholder & boxSize
    setNewMailbox((prevNewMailbox) => ({ ...prevNewMailbox, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(newMailbox); //enter ID number.
    setNewMailbox({ _id: "", boxSize: "small", boxholder: "" });
    navigate("/Mailboxes");
  };

  return (
    <form>
      <h1>New Mailbox</h1>
      <Label htmlFor="boxholder-name">Enter a Boxholder:</Label>
      <Input
        name="boxholder-name"
        id="boxholder"
        placeholder="Boxholder name"
        value={newMailbox.boxholder}
        onChange={handleChange}
      />
      <Label htmlFor="box-size">Select a Box Size</Label>
      <select
        name="box-size"
        id="boxSize"
        value={newMailbox.boxSize}
        onChange={handleChange}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button onClick={handleSubmit} disabled={!newMailbox.boxholder}>
        Submit
      </button>
    </form>
  );
};

export default MailboxForm;
