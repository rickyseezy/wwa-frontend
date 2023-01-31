import Card from "@components/card/Card";
import { forwardRef } from "react";
import styles from './countrycard.module.scss'

let tab = []

for(let i = 0 ; i < 15 ; i++){
    tab.push(i)

}

const CountryCard = (props,ref) => {
    console.log(tab)
    return ( 
        <div className={styles['grid-card']} ref={ref}>
          {tab.map((el,i)=>{
            return <Card key={i}/>
          })}
        </div>
     );
}
let fowarding = forwardRef(CountryCard)
export default fowarding;