import React from "react";

export default function Post(props) {
  const [like, setLike] = React.useState("heart-outline");

  const [salvarPost, setSalvarPost] = React.useState("bookmark-outline");

  const [numeroCurtidas, setNumeroCurtidas] = React.useState(215);

  function Like() {
    if (like === "heart-outline") {
      setLike("heart");
      setNumeroCurtidas(numeroCurtidas + 1);
    } else {
      setLike("heart-outline");
      setNumeroCurtidas(numeroCurtidas - 1);
    }
  }

  function salvar() {
    if (salvarPost === "bookmark-outline") {
      setSalvarPost("bookmark");
    } else {
      setSalvarPost("bookmark-outline");
    }
  }
  function curtidaImagem() {
    if (like === "heart-outline") {
      setLike("heart");
      setNumeroCurtidas(numeroCurtidas + 1);
    }
  }
  return (
    <>
      <div data-test="post" className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.imagem} alt="" />
            {props.nome}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img
            data-test="post-image"
            src={props.imagemPost}
            alt=""
            onClick={curtidaImagem}
          />
        </div>

        <div className="fundo">
          <div class="acoes">
            <div>
              <ion-icon
                data-test="like-post"
                name={like}
                onClick={Like}
                class={like}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                data-test="save-post"
                name={salvarPost}
                onClick={salvar}
              ></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/img/respondeai.svg" alt="respondeai" />
            <div className="texto">
              Curtido por <strong>respondeai </strong>e
              <strong data-test="likes-number">
                {" "}
                outras {props.curtida}.{numeroCurtidas} pessoas
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
