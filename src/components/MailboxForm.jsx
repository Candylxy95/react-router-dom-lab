import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  const navigate = useNavigate();
  const [newMailbox, setNewMailbox] = useState({
    _id: "",
    boxSize: "",
    boxholder: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target; //grab the id and value of target in this case boxholder & boxSize
    setNewMailbox((prevNewMailbox) => ({ ...prevNewMailbox, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newMailbox);
    props.addBox(newMailbox); //enter ID number.
    setNewMailbox({ _id: "", boxSize: "", boxholder: "" });
    navigate("/Mailboxes");
  };

  return (
    <form>
      <h2>New Mailbox</h2>
      <label htmlFor="boxholder-name">Enter a Boxholder:</label>
      <input
        name="boxholder-name"
        id="boxholder"
        type="text"
        placeholder="Boxholder name"
        value={newMailbox.boxholder}
        onChange={handleChange}
      />
      <label htmlFor="box-size">Select a Box Size</label>
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
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default MailboxForm;
