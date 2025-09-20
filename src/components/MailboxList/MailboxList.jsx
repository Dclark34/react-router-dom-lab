import { Link } from "react-router";

const MailboxList = (props) => {
    return (
        <>
        <h1>Mailboxes</h1>
        <ul>
            {props.mailboxes.map((mailbox) => (
            <li key={mailbox.boxOwner} className="mail-box">
                <Link to={`/mailboxes/${mailbox._id}`}>
                    Mailbox: {mailbox._id}
                </Link>
            </li>
            ))}
        </ul>
        </>
    );
};


export default MailboxList;


//!line 9 why is the key a name and not id? Or at least in the pokemon lab it would be. Say you had
//! duplicate names. wouldnt an Id be better as the key?