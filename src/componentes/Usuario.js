import React from "react";
import validator from "validator";

export default function Usuario() {
  const [nome, setNome] = React.useState("Insira nome de usuário");
  const nomeUsuario = () => prompt("Qual o nome de usuário?");

  const [imagem, setImagem] = React.useState(
    "https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg"
  );
  function perguntarImagem() {
    let urlImagem = prompt("Adicione o URL de uma imagem");

    if (validator.isURL(urlImagem)) {
      setImagem(urlImagem);
    } else {
      alert("Insira uma URL válida");
    }
  }
  return (
    <div class="usuario">
      <img
        src={imagem}
        alt="imagem de perfil"
        data-test="profile-image"
        onClick={perguntarImagem}
      />
      <div class="texto">
        <span data-test="name">
          <strong>{nome}</strong>
          <ion-icon
            data-test="edit-name"
            name="pencil"
            onClick={() => setNome(nomeUsuario)}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
