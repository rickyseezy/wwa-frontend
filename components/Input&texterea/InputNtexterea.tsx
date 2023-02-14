import React, { useState, useEffect, useRef, createRef } from "react";
import styles from "./input&texterea.module.scss";
import InputFile from "./InputFile";

interface ControlInputNtextera {
  titleInput: string;
  placeholder: string;
  bolea: boolean;
  val:React.ChangeEventHandler<HTMLTextAreaElement>
  fileSelect:Function,
  removefile:Function,
  files?: string[]
}

const InputNtexterea = ({
  titleInput,
  placeholder,
  bolea,
  val,
  fileSelect,
    files = []
  // removefile
}: ControlInputNtextera) => {
  let tab = [];
  let [tabfile, settabfile] = useState<string[]>(files);

  function INputValue(e) {

    const file = e?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log("HERE 2")
        if (reader.result) {
          console.log("RESULT = ", reader.result)
        tab.push(reader.result);
          console.log("TAB length ", tab.length)
          fileSelect(tab)
          settabfile(tabfile.concat(tab));
        }
      };
    }
  }
console.log(tabfile)
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
            {titleInput}
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
