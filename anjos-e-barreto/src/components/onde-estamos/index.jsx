import { StyledSection } from "./style.js";
import MapaBrasil from "../../assets/brasil.png";
export function OndeEstamos() {
  return (
    <StyledSection>
      <div className="Cont_On_Tit">
        <h1>Onde Estamos</h1>
        <img src={MapaBrasil} alt="" />
      </div>
    </StyledSection>
  );
}
