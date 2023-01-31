import Card from "@components/card/Card";
import styles from './countrycard.module.scss'

let tab = []

for(let i = 0 ; i <= 15 ; i++){
    tab.push(i)

}

const CountryCard = () => {
    console.log(tab)
    return ( 
        <>
          {tab.map((el,i)=>{
            return <Card key={i}/>
          })}
          </>
     );
}

export default CountryCard;