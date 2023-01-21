import Picture from "@components/images/Picture";
import React, { useState, useEffect, useRef, createRef } from "react";
import styles from "./input&texterea.module.scss";
import InputFile from "./InputFile";

interface ControlInputNtextera {
  titleInput: string;
  placeholder: string;
  bolea: boolean;
  val:React.ChangeEventHandler<HTMLTextAreaElement>
  fileSelect:Function,
  removefile:Function
}

let tab = [];
const InputNtexterea = ({
  titleInput,
  placeholder,
  bolea,
  val,
  fileSelect,
  // removefile
}: ControlInputNtextera) => {


  let [cathFile, setcatch] = useState();
  let [tabfile, settabfile] = useState([]);

  function INputValue(e) {
    console.log(e.target.files,'file man')
    const file = e.target.files[0];
    if (file) {
      setcatch(file);
    } else {
      setcatch(null);
    }
  }

  useEffect(() => {
    if (cathFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          console.log(tab,'moh the super fucker up ')

          tab.push(reader.result);
          console.log(tab,'moh the super fucker down')

          fileSelect(tab)
          settabfile([...tab]);
          // removefile(tab)
     
        }
      };
      reader.readAsDataURL(cathFile);
    } else {
      console.log("no file");
    }


  }, [cathFile]);




  if (bolea) {
    return (
      <div className={styles["form-container1__step"]} >
        {titleInput}
        <textarea
          className={styles["form-container1__textarea"]}
          placeholder={placeholder}
          onChange={val}
        />
      </div>
    );
  }

  if (!bolea) {
    if (tabfile.length === 0) {
      return (
        <>
          {" "}
          <div className={styles["form-container1__step"]}>
            4. Ajoutez une image a votre projet
          </div>{" "}
          <div className={styles["files"]}>
            <img
              className={styles["files__icon"]}
              src="/icons/socials-yt.png"
            />{" "}
            <div className={styles["files__text"]}>
              {" "}
              Importez des photos et des vidéos depuis votre appareil{" "}
            </div>
            <InputFile select={INputValue} classtyle={"files__input"} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <h4 className={styles["add-text"]}>
              5. Ajoutez des images et vidéos à votre projet
            </h4>
          </div>
          <div className={styles["step-grid"]}>
            {tabfile.length > 0
              ? tabfile.map((el, i) => (
                  <div className={styles["step-item"]} key={i}>
                    <img src={el} alt="" className={styles["img"]} />
                  </div>
                  
                ))
              : null}
            {tabfile.length > 0 ? (
              <>
                <div className={styles["input-file"]}>
                  <img src="/images/image-plus.png" alt="" />
                  <InputFile
                    select={INputValue}
                    classtyle={"input-file__input"}
                  />
                </div>
              </>
            ) : null}
          </div>
        </>
      );
    }
  }
};

export default InputNtexterea;
