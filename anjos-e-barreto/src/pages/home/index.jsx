import "../../styles/geral.css";
import Header from "../../components/header/index.jsx";
import { Depoimentos } from "../../components/depoimentos/index.jsx";
import { Noticias } from "../../components/noticias/index.jsx";
import { AreaDeAtuacao } from "../../components/area-de-atuacao/index.jsx";
// import { OndeEstamos } from "../../components/onde-estamos/index.jsx";

function Home() {
  return (
    <>
      <Header></Header>
      <AreaDeAtuacao></AreaDeAtuacao>
      {/* <OndeEstamos></OndeEstamos> */}
      <Noticias></Noticias>
      <Depoimentos></Depoimentos>
    </>
  );
}

export default Home;
