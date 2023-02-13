import Post from "./Post";

export default function Posts() {
  const informacoes = [
    {
      nome: "meowed",
      imagem: "assets/img/meowed.svg",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidasImg: "assets/img/respondeai.svg",
      curtida: "64",
    },
    {
      nome: "catanacomics",
      imagem: "assets/img/catanacomics.svg",
      imagemPost: "assets/img/dog.svg",
      curtidasImg: "assets/img/respondeai.svg",
      curtida: "96",
    },
    {
      nome: "jet",
      imagem: "assets/img/barked.svg",
      imagemPost: "assets/img/gatinho jet.jpg",
      curtidasImg: "assets/img/respondeai.svg",
      curtida: "96",
    },
  ];

  return (
    <div className="posts">
      {informacoes.map((p) => (
        <Post
          key={p.imagem}
          nome={p.nome}
          imagem={p.imagem}
          imagemPost={p.imagemPost}
          curtidasImg={p.curtidasImg}
          curtida={p.curtida}
        />
      ))}
    </div>
  );
}
