import React from 'react'
import Infofooter from '../infoFooterleft/Infofooter'
import styles from '../Footer/footer.module.scss'
interface PropsContainerFooter{
   containerFooterClass : string
}

function ContainerFooter({containerFooterClass} : PropsContainerFooter ) {
  return (
      <>
        <div className={styles[containerFooterClass]}>
 

 <Infofooter facebook="/images/Facebook.png" 
  Instagram="/images/Instagram.png"
  Twitter="/images/Twitter.png"
  Youtube="/images/Youtube.png"        
  />

 <div className={styles['infofooter']}>
     <div className="linkfooterright">
         <h2>World We Act</h2>
         <ul>
             <li>Les courses</li>
             <li>Les projets</li>
             <li>E-stand</li>
             <li>Actualité</li>
         </ul>
     </div>
     <div className="linkfooterright">
     <h2>A propos</h2>
         <ul>
             <li>Le groupe</li>
             <li>Mentions légale</li>
             <li>conditions <br /> générale <br /> d'utilisation</li>
             <li>Politique  de <br /> confidentialité</li>
         </ul>
     </div>
     <div className="linkfooterright">
     <h2>Rejoignez la Newsletter</h2>
     <input type="text"  placeholder='Votre email'  />
         
 </div>
</div>

</div>
      </>
  )
}

export default ContainerFooter