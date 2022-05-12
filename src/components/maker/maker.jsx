import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Preview from "../preview/preview";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "hansol",
      company: "morning-coffee",
      theme: "dark",
      title: "Software Engineer",
      email: "iihansoll@morning-coffee.co.kr",
      message: "go for it",
      fileName: "hansol",
      fileURL: "null",
    },
    {
      id: "2",
      name: "hansol2",
      company: "morning-coffee",
      theme: "light",
      title: "Software Engineer",
      email: "iihansoll@morning-coffee.co.kr",
      message: "go for it",
      fileName: "hansol",
      fileURL: "ellie.png",
    },
    {
      id: "3",
      name: "hansol3",
      company: "morning-coffee",
      theme: "colorful",
      title: "Software Engineer",
      email: "iihansoll@morning-coffee.co.kr",
      message: "go for it",
      fileName: "hansol",
      fileURL: "null",
    },
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
