import styles from "./ScrollList.module.scss";
import Card from "@components/card/Card";
import {useRef, useEffect, useState, useMemo} from "react"

interface IControlSwitch {
    direction : Object,
    id : Number

}
let compte = 0

let tabId = []

const ScrollList = ({direction, id} : IControlSwitch) => {

    let containerCard = useRef(null)

    useEffect(() => {

        let left = null

        //   si les fleches qui ont été cliqué correspondent au carrousel

        if (direction.id === id) {
            if (containerCard != null) {
                left = containerCard
                    .current
                    .getBoundingClientRect()
                    .left
                // console.log(left, 'container')

            }
            if (direction.directiono === 'right') {

                if (left < 18) {
                    compte += 365

                }
                containerCard.current.style = `transform:translateX(${compte}px);transition:.5s`

            } else if (direction.directiono === 'left') {
                tabId.push(id)
                //  remet la valeur de compte a zero si la précdente valeur de id est diffetente
                // de la currente
                if (tabId[tabId.length - 2] != tabId[tabId.length - 1]) {
                    compte = 0
                
                }
                   
                compte -= 365
        
                containerCard.current.style = `transform:translateX(${compte}px);transition:.5s`
              console.log(compte,'ffffffff')
            }

        }

    }, [direction, id])

    return (
        <div className={styles['container-scroll']} ref={containerCard}>
            <ul className={styles["scroll-list"]}>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
                <li>
                    <Card/>
                </li>
            </ul>
        </div>
    );
};

export default ScrollList;
