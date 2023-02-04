import { useRouter } from "next/router";
import { useEffect, useState,useRef, MouseEventHandler } from "react";
import styles from "../layouts/projects/ProjectsLayout.module.scss";

interface MenuCountryProps{
    select : MouseEventHandler<HTMLLIElement>
}


const continentConfig = new Map([
  [
      "EUROPE", {
          pays: ['Italie','Espagne','Portugal','Allemagne'],
      }
  ],
  [
      "AFRICA", {
        pays: ['Sénégale','Mali','Nigéria','Congo'],

      }
  ],
  [
      "AMÉRIQUE DU NORD", {
        pays: ['New York','Atlanta','Philadelphie','Chicago'],

      }
  ],
  [
      "AMÉRIQUE DU SUD", {
        pays: ['Brésil','Colombie','Venezuela','Mexique'],

      }
  ],
  [
      "ASIE", {
        pays: ['Japon','Chine','Inde','Thailande'],

      }
  ],
  [
      "OCÈANIE", {
        pays: ['Australie','Fidji','Micronésie','Tonga']
      }
  ]
]);


function MenuCountry({select}:MenuCountryProps) {
    const [isShown, toggleButton] = useState(false);
    let [tabcountry,settabcountry] = useState([])
    let scrollable = useRef()
    let router = useRouter()
    let pays = useRef(null)
    pays.current = []

    const scrollButton = (
        <div className={`${styles["bullet"]}`}>
          <img
            className={styles["bullet__arrow"]}
            src={`/icons/right-arrow-blue.svg`}
            alt="left arrow"
          />
        </div>
      )
    function showScrollableMenu(element: HTMLElement) {
        toggleButton(
          element.scrollHeight > element.clientHeight ||
          element.scrollWidth > element.clientWidth
        );
      }

      function AddCountry(continent){
       let tabPays = continentConfig.get(continent).pays;
       settabcountry(tabPays)
    
      } 

      function MenuSelected(e){
        pays.current.map(pay =>{
          pay.classList.remove('ProjectsLayout_menu__link--selected__Is402')

        })
        console.log(e.target,'menu selected')
        e.target.classList.add('ProjectsLayout_menu__link--selected__Is402')
      }

      useEffect(()=>{
        const scroll =  scrollable.current


        showScrollableMenu(scroll);
        if(router.query.index){
          AddCountry(router.query.index)
          pays.current[0].classList.add('ProjectsLayout_menu__link--selected__Is402')
        }else{
          AddCountry('EUROPE')

        }


      },[router.query.index])

     function ChangePays(e){
        if(!pays.current.includes(e)){
          pays.current.push(e)
         pays.current = pays.current.filter(e => e !== null)
        }
 

     }
      

    return ( 

        <div className={styles["menu-container"]}>
        <ul className={styles["menu"]} id={styles["scrollable"]}  ref={scrollable}>
          <li onClick={(e)=>{
            select(e)
            MenuSelected(e)
          }} ref={ChangePays}
            className={`${styles["menu__link"]} ${styles["menu__link--selected"]} `}
          >
            Top causes
          </li>
          {tabcountry.map(country =>{
            return (
              <li onClick={(e)=>{
                select(e)
                MenuSelected(e)

              }} ref={ChangePays} key={country} className={styles["menu__link"]}>{country}</li>

            )
          })}
 

        </ul>
        <div className={styles["menu-container__icon"]}>
          {isShown ? scrollButton : null}
        </div>
      </div>
     );
}

export default MenuCountry;