import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Preview from "../preview/preview";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    //배열로 만들어줘도 되지만 많아질수록 맵핑하는데 오래걸리니까 object로 처리해줌.
    1: {
      id: "1",
      name: "hansol",
      company: "morning-coffee",
      theme: "dark",
      title: "Software Engineer",
      email: "iihansoll@morning-coffee.co.kr",
      message: "go for it",
      fileName: "hansol",
    },
    2: {
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
    3: {
      id: "3",
      name: "hansol3",
      company: "morning-coffee",
      theme: "colorful",
      title: "Software Engineer",
      email: "iihansoll@morning-coffee.co.kr",
      message: "go for it",
      fileName: "hansol",
    },
  });

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

  //   const addCard = (card) => {
  //     const updated = [...cards, card];
  //     setCards(updated);
  //   };

  const createOrUpdateCard = (card) => {
    // 기존의 id가 기존에 없었다면 추가되기때문에 update와 add는 처리해주는 것이 똑같음.
    setCards((cards) => {
      // updated를 통해 바로 cards를 불러오고 setCards를 마지막에 써줘도 되지만 그러면 cards가 동기적으로 불러오지 못할 수 있음. 오래된 것일 수도 있기때문에 새로 불러와줌.
      const updated = { ...cards };
      updated[card.id] = card;
      //   setCards(updated);
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
