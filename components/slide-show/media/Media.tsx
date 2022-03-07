import styles from "./Media.module.scss";

interface IMediaProps {
  index: number;
}

const Media = ({ index }: IMediaProps) => {
  return (
    <li>
      <div
        className={`${styles["media"]} ${
          index == 0 ? styles["media--activated"] : null
        }`}
      >
        <img src="/icons/play-circle.svg" />
      </div>
    </li>
  );
};

export default Media;
