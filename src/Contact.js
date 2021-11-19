import React from "react";

export default function Contact({ img, name, phone, mail }) {
  return (
    <div className="contact-card">
      <img src={img} alt="cat" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" alt="cat" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" alt="cat" />
        <p>{mail}</p>
      </div>
    </div>
  );
}
/* destructurar props significa asi como recibimos los parametros , con props
poder mantener el nombre asignado para facilitar el uso
en lugar de usar Contact(props) -> {props.name}
usar Contact({img, name, mail}) -> {img} {name} {mail} 
*/
