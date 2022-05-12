import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click(); // inputRef.current 속성을 통해 input 엘리먼트에 접근할 수 있음.
  };

  const onChange = async (event) => {
    imageUploader.upload(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded); //result.json()이 결과
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {/* accept: 파일형식 지정. /뒤는 확장자 표시: */}
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
