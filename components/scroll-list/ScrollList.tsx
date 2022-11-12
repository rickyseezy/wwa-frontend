import styles from "./ScrollList.module.scss";
import Card from "@components/card/Card";
import {useRef, useEffect, useState, useMemo} from "react"

type Direction = {directiono: String;id:Number}

type CarousselsIds = {
    id1?:number,
    id2?:number,
    id3?:number,
    id4?:number
}



interface IControlSwitch {
    direction : Direction,
    id : Number

}
let compte = 0

let tabId = []
let idobj : CarousselsIds = {}

const ScrollList = ({direction, id} : IControlSwitch) => {

    let containerCard = useRef(null)

    function memoiseDiection(idDir : Number, obj : CarousselsIds) {

        if (idDir === 1 && Object.keys(obj).length != 0) {
            console.log('1 volet ', idDir, obj)

            //    si la fleche n'as pas encore été cliquer compte = 0
            if (!obj.id1) {
                obj['id1'] = 0
                compte = obj.id1
                console.log(obj)
            } else {
                compte = obj.id1

            }
        }

        if (idDir === 2 && Object.keys(obj).length != 0) {
            console.log('2 volet ', idDir, obj)

            //    si la fleche n'as pas encore été cliquer compte = 0
            if (!obj.id2) {
                obj['id2'] = 0
                compte = obj.id2
                console.log(obj)
            } else {
                compte = obj.id2

            }
        }
        if (idDir === 3 && Object.keys(obj).length != 0) {
            console.log('3 volet ', idDir, obj)
            //    si la fleche n'as pas encore été cliquer compte = 0
            if (!obj.id3) {
                obj.id3 = 0
                compte = obj.id3
            } else {
                compte = obj.id3

            }
        }

        if (idDir === 4 && Object.keys(obj).length != 0) {
            //    si la fleche n'as pas encore été cliquer compte = 0
            if (!obj.id4) {
                obj.id4 = 0
                compte = obj.id4
            } else {
                compte = obj.id4

            }
        }
    }

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

            //  si la direction cliquer est droite avancé le carousel d'une carte
            if (direction.directiono === 'right') {
                tabId.push(id)

                // empéché la carte de déplacé
                if (left < 18) {

                    // si la direction d'une autre gallerie a été cliqué
         if (tabId[tabId.length - 2] != tabId[tabId.length - 1]) {
                        if (tabId[tabId.length - 2] === 1 || tabId[tabId.length - 1] === 1) {
                            compte = 0
                            idobj = {}
                            console.log(compte, idobj, 'first or last 1')
                        }
                        memoiseDiection(id, idobj)
                    }

                    compte += 365
                    idobj[`id${id}`] = compte
                    containerCard.current.style = `transform:translateX(${compte}px);transition:.5s ease`
                    console.log(idobj, 'right infos')
                    console.log(tabId, 'right infos')
                }

            } else if (direction.directiono === 'left') {
                //  remet la valeur de compte a zero si la précdente valeur de id est diffetente
                // de la current console.log('call')
                tabId.push(id)

                // si la direction d'une autre gallerie a été cliqué
                if (tabId[tabId.length - 2] != tabId[tabId.length - 1]) {
                    if (tabId[tabId.length - 2] === 1 || tabId[tabId.length - 1] === 1) {
                        compte = 0
                        idobj = {}
                        console.log(compte, idobj, 'first or last 1')
                    }
                    memoiseDiection(id, idobj)

                }

                compte -= 365
                idobj[`id${id}`] = compte
                containerCard.current.style = `transform:translateX(${compte}px);transition:.5s ease`
                // console.log(compte, 'ffffffff') console.log(idobj, 'out')
                console.log(idobj, 'left infos')
                console.log(tabId, 'left infos')
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
