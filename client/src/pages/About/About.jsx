import { useSelector } from "react-redux";
import style from "./styles/About.module.css";

const About = () => {



  const about = useSelector((store) => store.characters.about)
  console.log(about);

  return (
    <div className={style.containerAbout}>
      <div className={style.paragraph}>
        <p className={style.text}>
          {about.paragraph1}
        </p>
        <br />
        <p className={style.text}>
        {about.paragraph2}
        </p>
        <br />
        <p className={style.text}>
        {about.paragraph3}
        </p>
        <br />
        <p className={style.text}>
        {about.paragraph4}
        </p>
      </div>
    </div>
  );
};

export default About;
