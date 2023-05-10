import React from "react";
import { useSelector } from "react-redux";
import style from "./styles/Home.module.css"

const Home = () => {

  const characters = useSelector((store) => store.characters.data);

  return (
    <div className={style.containerCards}>
      {
        characters.map((char) => (
            <div id={char.id} className={style.card}>
                <img className={style.img} src={char.image} alt={char.name} />
                <div className={style.containerInfo}>
                    <p className={style.typeInfo}>Character Name</p>
                    <p className={style.info}>{char.name}</p>
                    <p className={style.typeInfo}>House</p>
                    <p className={style.info}>{char.house}</p>
                    <p className={style.typeInfo}>Ancestry</p>
                    <p className={style.info}>{char.ancestry}</p>
                    <p className={style.typeInfo}>Actor Name</p>
                    <p className={style.info}>{char.actor}</p>
                </div>
            </div>
        ))
      }
      
    </div>
  );
};

export default Home;
