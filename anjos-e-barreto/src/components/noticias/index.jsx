import { StyledSection } from "./style";
import img_adv from "../../assets/adv_img.webp";

export function Noticias() {
  return (
    <StyledSection>
      <div className="Con_Not">
        <div className="Con_Not_Tit">
          <h1>Noticias</h1>
        </div>
        <div className="Con_Not_Ico">
          <div className="Con_Int">
            <div className="Not_Car">
              <img src={img_adv} alt="" />
            </div>
            <div className="Not_Car_Tit">Direito 1</div>
          </div>
          <div className="Con_Int">
            <div className="Not_Car">
              <img src={img_adv} alt="" />
            </div>
            <div className="Not_Car_Tit">Direito 2</div>
          </div>
          <div className="Con_Int">
            <div className="Not_Car">
              <img src={img_adv} alt="" />
            </div>
            <div className="Not_Car_Tit">Direito 3</div>
          </div>
          <div className="Con_Int">
            <div className="Not_Car">
              <img src={img_adv} alt="" />
            </div>
            <div className="Not_Car_Tit">Direito 4</div>
          </div>
          <div className="Con_Int">
            <div className="Not_Car">
              <img src={img_adv} alt="" />
            </div>
            <div className="Not_Car_Tit">Direito 5</div>
          </div>
          <div className="Con_Int">
            <div className="Not_Car">
              <img src={img_adv} alt="" />
            </div>
            <div className="Not_Car_Tit">Direito 6</div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
