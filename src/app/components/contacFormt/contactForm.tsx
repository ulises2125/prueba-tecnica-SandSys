"use client";
import styles from "./contactForm.module.css";
import { useRef, useState } from "react";

const ContactForm = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.fullName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      return;
    }
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
    alert("Data sent!");
  };

  return (
    <div className={styles.container}>
      <h1>Contact me </h1>
      <form className={styles.formContact} onSubmit={handleSubmit}>
        <div>
          <span>Full name</span>
          <input
            placeholder="Full name"
            type="text"
            required
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Email</span>
          <input
            placeholder="Email"
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Content</span>
          <textarea
            ref={textAreaRef}
            placeholder="Message"
            onInput={handleInput}
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.button}>
          <button type="submit" disabled={isSubmitted}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
