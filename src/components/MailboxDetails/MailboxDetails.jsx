import { useParams } from "react-router";

const MailboxDetails = (props) => {
    console.log(props);

    const { mailboxId } = useParams(); //params hook
    console.log('mailboxId: ', mailboxId);

    const currentMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    console.log('MailboxId: ', currentMailbox);

    return (
        <>
        <h1>MailBox {currentMailbox._id}</h1>
            <h2>Details</h2>
            <dl>
            <dt>Box Owner : </dt>
            <dd>{currentMailbox.boxOwner}</dd>
            <dt>Box Size : </dt>
            <dd>{currentMailbox.boxSize}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails;