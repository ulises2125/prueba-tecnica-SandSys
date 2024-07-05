import Image from "next/image";
import styles from "./aboutme.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutText}>
        <h5 className={styles.typewriter}>Hello, Welcome</h5>
        <h1> About me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="./about-photo.svg"
          layout="responsive"
          height="600"
          width="600"
          alt="about photo"
        />
      </div>
    </div>
  );
};

export default AboutMe;
