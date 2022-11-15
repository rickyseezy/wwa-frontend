import styles from "./ScrollList.module.scss";
import Card from "@components/card/Card";
import {useRef, useEffect, useState, useMemo} from "react"

interface Direction {
    direction?: String;
    id?: Number
}

interface IControlSwitch {
    dir : Direction,

    id : Number
}

type CarousselsIds = {
    id1?: number,
    id2?: number,
    id3?: number,
    id4?: number
}

let compte = 0

let tabId = []
let idobj : CarousselsIds = {}

const ScrollList = ({dir, id} : IControlSwitch) => {
    console.log(dir, 'direction')
    let containerCard = useRef(null)
    let scroll_list = useRef(null)
    let in_slider = useRef(null)

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

    let firstcard = null
    useEffect(() => {

        let left = null
        let right = null

        //   si les fleches qui ont été cliqué correspondent au carrousel

        if (dir.id === id) {
            if (containerCard != null) {
                left = containerCard
                    .current
                    .getBoundingClientRect()
                    .left
                right = containerCard
                    .current
                    .getBoundingClientRect()
                    .right

            }
            //  si la dir cliquer est droite avancé le carousel d'une carte
            if (dir.direction === 'right') {
                tabId.push(id)

                if (scroll_list.current) {
                    firstcard = scroll_list
                        .current
                        .firstChild
                        .getBoundingClientRect()
                        .left
                }

                // if (window.innerWidth > 1200) {     firstcard = 42 } else if
                // (window.innerWidth < 500) {     firstcard = 20 }
                if (left > firstcard) {

                    // si la dir d'une autre gallerie a été cliqué
                    if (tabId[tabId.length - 2] != tabId[tabId.length - 1]) {
                        if (tabId[tabId.length - 2] === 1 || tabId[tabId.length - 1] === 1) {
                            compte = 0
                            idobj = {}
                        }
                        memoiseDiection(id, idobj)
                    }
                    compte += 365
                    idobj[`id${id}`] = compte
                    in_slider.current.style = `transform:translateX(${compte}px);transition:.5s ease`

                }

            } else if (dir.direction === 'left') {
                //  remet la valeur de compte a zero si la précdente valeur de id est diffetente
                // de la current console.log('call')

                tabId.push(id)
                let leftLastCard = scroll_list
                    .current
                    .lastChild
                    .getBoundingClientRect()
                    .right
                console.log(in_slider.current.getBoundingClientRect(), 'yo', containerCard.current.getBoundingClientRect().x,window.innerWidth)

                // si la dir d'une autre gallerie a été cliqué
                if (tabId[tabId.length - 2] != tabId[tabId.length - 1]) {
                    if (tabId[tabId.length - 2] === 1 || tabId[tabId.length - 1] === 1) {
                        compte = 0
                        idobj = {}
                    }
                    memoiseDiection(id, idobj)

                }

                // more than 12000 1867 recalculé la valeur last limit selaon la taille de
                // l"écran sans resize

                // let lastlimit = 0
                // if (window.innerWidth > 1200) {
                //     lastlimit = 1867
                // } else if (window.innerWidth < 500) {
                //     lastlimit = 380
                // }

                // recalculé la valeur last limit selaon la taille de l"écran en resize
                // window.addEventListener('resize', () => {     if (window.innerWidth > 1200) {
                //         lastlimit = 1867     } else if (window.innerWidth < 500) {
                // lastlimit = 380     } }) console.log('last', lastlimit) si la derniére carte
                // arrive a la position central
                if (in_slider.current.getBoundingClientRect().right >= window.innerWidth + containerCard.current.getBoundingClientRect().x) {
                    compte -= 365
                }

                idobj[`id${id}`] = compte
                in_slider.current.style = `transform:translateX(${compte}px);transition:.5s ease`

            }

        }

    }, [dir, id])

    return (
        <div className={styles['container-scroll']} ref={containerCard}>
            <div className={styles['inner--slider']} ref={in_slider}>

                <ul className={styles["scroll-list"]} ref={scroll_list}>
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
        </div>
    );
};

export default ScrollList;
