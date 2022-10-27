import TeamImage from "./TeamImage";
import profile from "../public/Component.png";
import styles from "../styles/TeamImages.module.css";

const images = [
  { id: 1, src: profile, alt: "image", name: "ALEKSANDAR", position: "CEO" },
  { id: 2, src: profile, alt: "image", name: "ALEKSANDAR", position: "CEO" },
  { id: 3, src: profile, alt: "image", name: "ALEKSANDAR", position: "CEO" },
  { id: 4, src: profile, alt: "image", name: "ALEKSANDAR", position: "CEO" },
];

export default function TeamImages() {
  return (
    <div className={styles.profile}>
      {images.map((image) => (
        <TeamImage
          src={image.src}
          alt={image.alt}
          name={image.name}
          position={image.position}
          id={image.id}
        />
      ))}
    </div>
  );
}
