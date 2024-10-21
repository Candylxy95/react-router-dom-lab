import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import LetterForm from "./components/LetterForm";
import NotFound from "./components/NotFound";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]); //pushes newMailbox into mailboxes
  };

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
    console.log([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
        <Route path="*" element={NotFound} />
      </Routes>
    </>
  );
};

export default App;
