import ContactForm from "../components/contacFormt/contactForm";
import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className={styles.main}>
      <ContactForm />
    </div>
  );
}
