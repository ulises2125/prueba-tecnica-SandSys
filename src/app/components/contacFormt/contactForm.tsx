"use client";
import styles from "./contactForm.module.css";
import { useRef, useState } from "react";

const ContactForm = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact me </h1>
      <form className={styles.formContact}>
        <div>
          <span>Full name</span>
          <input placeholder="Full name" type="text" />
        </div>
        <div>
          <span>Email</span>
          <input placeholder="Email" type="email" />
        </div>
        <div>
          <span>Content</span>
          <textarea
            ref={textAreaRef}
            placeholder="Message"
            onInput={handleInput}
          ></textarea>
        </div>
        <div className={styles.button}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
