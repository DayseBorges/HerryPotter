import style from "./styles/Form.module.css";
import Swal from "sweetalert2";
import { formData } from "../../redux/slices/charactersSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Contact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    if (name && email && message) {
      dispatch(formData(contactData));
      console.log("Form Data:", contactData);
      Swal.fire({
        title: "Success!",
        text: "Message sent",
        icon: "success",
        confirmButtonText: "OK",
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Missing Data",
        icon: "error",
        confirmButtonText: "OK",
      });
    };
  };

  return (
    <div className={style.containerCreate}>
      <h2 className={style.create}>Leave us a message</h2>
      <form className={style.containerForm} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="name">
          Name
          <br />
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={style.label} htmlFor="email">
          E-mail
          <br />
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={style.label} htmlFor="message">
          Message
          <br />
          <textarea
            className={style.input}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
