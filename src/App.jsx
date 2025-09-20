import { useState } from "react";
import {Route, Routes} from 'react-router';
import NavBar from "./components/navbar/navbar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import NewMailbox from "./components/NewMailbox/NewMailbox";

const initialState = [
  {_id: 1, boxOwner: "Test Box", boxSize: "small"}
]

const App = () => {
  //initial state
  const [mailboxes, setMailboxes] = useState(initialState);


const addBox = (newMailboxData) => {
  newMailboxData._id = mailboxes.length + 1;
  console.log(newMailboxData);
  setMailboxes([...mailboxes, newMailboxData])
}


  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<main><h1>Welcome to the Post Office!</h1></main>} />
    <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
    <Route path="/mailboxes/new" element={<NewMailbox addBox={addBox} />} />
    <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
    <Route path="*" element={<h1>Mailbox Not Found!</h1>} />
    </Routes>

  </> 
  );
};

export default App;
