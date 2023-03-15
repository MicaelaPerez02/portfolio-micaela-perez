import CardContactMe from "../../../../components/CardContactMe";
import { socialMediaContacts } from "./contactMeData";

function ContactMe() {
    return (
        <>
            <h1>Contact Me</h1>
            <main>
                {socialMediaContacts.map((contact) => (
                    <CardContactMe key={contact.id}>
                        <CardContactMe.Title>{contact.title}</CardContactMe.Title>
                        <CardContactMe.Image src={contact.image} alt={contact.alt} />
                        <CardContactMe.Desc>{contact.description}</CardContactMe.Desc>
                    </CardContactMe>
                ))}
            </main>
        </>
    )
}

export default ContactMe;