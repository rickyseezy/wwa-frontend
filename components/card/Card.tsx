import styles from "./Card.module.scss";
import { useRouter } from "next/router";

const Card = ({content}) => {
console.log(content)
  const router = useRouter()

  const GotoPageCause = (id : string) =>{
    if(!id){
      alert('nope')
    }
    console.log(id,'the uid')
    router.push(`/projects/${id}`)
    
  }
  return (
    <div className={styles["card"]}>
      
      <div className={styles["banner"]}>
        <img src="/images/default-cause.png" />
        <div className={styles["banner__indicator"]}>600 459 actors</div>
      </div>
      <div className={styles["pusher"]} />
      <div className={styles["card__title"]}>
        {content ? content.title : "Des logements décents et fonctionnels"}
      </div>
      <div className={styles["pusher"]} />
      <div className={styles["card__description"]}>
       {content ?
        `${content?.description?.substring(0,120)}...` :
       "Lorem Ipsum dolor amet, consectetur adipiscing elit. Mattis et sed namsem tellus erat.Lorem Ipsum dolor amet, consectetur adipiscing elit."}
        
      </div>
      <div className={styles["pusher--l"]} />
      <div className={styles["button"]}>
        <div className={styles["button__text"]} onClick={()=> content?.id ? GotoPageCause(content?.id) : alert('no id on this card')
        
        }>Voir</div>
      </div>
    </div>
  );
};

export default Card;
