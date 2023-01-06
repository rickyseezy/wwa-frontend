import styles from "./Footer.module.scss";
import Logo from "@components/logo/Logo";
import NewsletterInput from "@components/footer/newsletter/NewsletterInput";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__content"]}>
        
        <div className={styles["menu"]}>
          <div
            className={`${styles["primary"]} ${styles["menu__block--large"]}`}>
            <div className={styles["primary__logo"]}>
              <Logo src="/images/wwa-logo-white.png" />
            </div>
            <div className={styles["socials"]}>
              <div
                className={`${styles["socials__fb"]} ${styles["shape"]} ${styles["pusher"]}`}
              >
                <img src="/icons/socials-fb.png" />
              </div>
              <div
                className={`${styles["socials__instagram"]} ${styles["shape"]} ${styles["pusher"]}`}
              >
                <img src="/icons/socials-twitter.png" />
              </div>
              <div
                className={`${styles["socials__twitter"]} ${styles["shape"]} ${styles["pusher"]}`}
              >
                <img src="/icons/socials-instagram.png" />
              </div>
              <div
                className={`${styles["socials__yb"]} ${styles["shape"]} ${styles["pusher"]}`}
              >
                <img src="/icons/socials-yt.png" />
              </div>
            </div>
          </div>
          <div
            className={`${styles["menu__block--small"]} ${styles["secondary"]}`}
          >
            <h2 className={styles["footer--title"]}>World We Act</h2>
            <div className={styles["pusher"]} />
            <div className={styles["footer--link"]}>Les causes</div>
            <div className={styles["footer--link"]}>Les projets</div>
            <div className={styles["footer--link"]}>E-Stands</div>
            <div className={styles["footer--link"]}>Actualités</div>
          </div>
          <div className={styles["menu__block--small"]}>
            <h2 className={styles["footer--title"]}>À propos</h2>
            <div className={styles["pusher"]} />
            <div className={styles["footer--link"]}>Le groupe</div>
            <div className={styles["footer--link"]}>Mentions Légales</div>
            <div className={styles["footer--link"]}>
             <p  className={styles['footer--paraLink']}>Conditions <br /> générales <br /> d&apos;utilisation</p>
            </div>
            <div className={styles["footer--link"]}>
           <p> Politique  de <br /> confidentialité </p>  
            </div>
          </div>
          <div className={styles["menu__block--medium"]}>
            <h2 className={styles["footer--title"]}>Rejoignez la newsletter</h2>
            <NewsletterInput />
          </div>
        </div>


        <div className={styles["container"]}>
          <div className={styles["copyright"]}>
            <div className={styles["copyright__dashline"]} />
            <div className={styles["copyright__logo"]}>
              {/* <img src="/images/footer-logo.png" /> */}
            </div>
            <div className={styles["copyright__dashline"]} />
          </div>
          <div className={styles["container__text"]}>
            © 2021 World We Act. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
