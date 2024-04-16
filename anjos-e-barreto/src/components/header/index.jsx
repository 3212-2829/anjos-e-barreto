import "../../styles/geral.css";
import "../../styles/topo.css";
import "../../styles/menu.css";
// import Menu from "../../components/menu/index.jsx";
import Logo from "../../assets/logo2.png";

function Header() {
  return (
    <>
      <header>
        <div className="Top_Int">
          <div className="Top_Int_001">
            <div className="Top_Int_Log">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>

            <div className="Top_Int_Men">
              <nav>
                <ul>
                  <li>
                    <a href="#">Quem Somos</a>
                  </li>

                  <li>
                    <a href="#Cap_Are_Pro">Área de Atuação</a>
                  </li>

                  <li>
                    <a href="#Que_Are">Notícias</a>
                  </li>

                  <li>
                    <a href="#End_Are">Representabilidade Social</a>
                  </li>

                  <li>
                    <a href="#Cap_Are_Out">LGPD</a>
                  </li>

                  <li>
                    <a href="#Rod_Are">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* <!-- Contato --> */}
          {/* <div className="Top_Int_Con">
                    <div className="Top_Int_Con_Int">
                        <div className="Top_Int_Con_Int_Tit">
                            <p>Fale com a gente</p>
                        </div>

                        <div className="Top_Int_Con_Int_Num">
                            <a href="https://api.whatsapp.com/send?phone=5511111111111">
                                <i className="fab fa-whatsapp"></i>
                                <p>(11) 1111-1111</p>
                            </a>
                        </div>
                    </div>
                </div> */}

          <div className="Top_Int_Men_Mob">
            <button id="menuButton">
              <i className="fas fa-bars"></i>
            </button>

            <div className="Top_Int_Men_Mob_Int">
              <div className="close"></div>

              <nav>
                <ul>
                  {/* <!-- <li><a href="#">Home</a></li> --> */}
                  <li>
                    <a href="#Cap_Are_Pro">Nossos Produtos</a>
                  </li>

                  <li>
                    <a href="#Que_Are">Quem Somos</a>
                  </li>

                  <li>
                    <a href="#End_Are">Localização</a>
                  </li>

                  <li>
                    <a href="#Cap_Are_Out">Outros Projetos</a>
                  </li>

                  <li>
                    <a href="#Rod_Are">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
