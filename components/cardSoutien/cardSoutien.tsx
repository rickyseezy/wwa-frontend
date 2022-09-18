import TittleAccount from '@components/titleAccount/TittleAccount'
import React from 'react'
import styles from './cardSoutien.module.scss'






export let objSoutient = [{
img : '/images/champdemoussa.png',
h1 : 'Les champs de Maïs de Moussa',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/fillete.png',
h1 : 'Une rentrée pour Stéphanie ',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/sable.png',
h1 : 'Des logements décents et fonctionnels',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/manif.png',
h1 : 'Culture pour tous avec ou sans Pass sanitaire',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/green cut.png',
h1 : 'Ramassage des déchets verts Zac Li Capucino',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/infirmiere.png',
h1 : 'Aidez-nous à encore sauver  des vies',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/manif.png',
h1 : 'Culture pour tous avec ou sans Pass sanitaire',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/green cut.png',
h1 : 'Ramassage des déchets verts Zac Li Capucino',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/infirmiere.png',
h1 : 'Aidez-nous à encore sauver  des vies',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/manif.png',
h1 : 'Culture pour tous avec ou sans Pass sanitaire',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/green cut.png',
h1 : 'Ramassage des déchets verts Zac Li Capucino',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/infirmiere.png',
h1 : 'Aidez-nous à encore sauver  des vies',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/manif.png',
h1 : 'Culture pour tous avec ou sans Pass sanitaire',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/green cut.png',
h1 : 'Ramassage des déchets verts Zac Li Capucino',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
},{
img : '/images/infirmiere.png',
h1 : 'Aidez-nous à encore sauver  des vies',
p: 'Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
}]





function CardSoutien() {



return (
<div className={styles['container']}>
  <TittleAccount titleH1='Mes soutiens' />

  <div className={styles['grid']}>
    {objSoutient.map((el)=>{
    console.log(el)


    return(

    <div className={styles['frontcard']}>
      <div className={styles['imgProjet']}>
        <img src={el.img} alt="" />
      </div>
      <div className={styles["cont-text"]}>
        <h2>{el.h1}</h2>
      <p>{el.p}</p>
      {/* card'button */}
      <br />
      <div className={styles['btn']}>
        <div className={styles['btnprojet']}>Voir</div>

      </div>
    </div>
    </div>
    )
    })}

  </div>
</div>
)
}

export default CardSoutien