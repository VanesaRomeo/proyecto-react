import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { HeroContainer, HeroSeparatorStyled, HeroStyled } from "./HeroStyled";
import { BsBalloonHeartFill } from "react-icons/bs";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer id="hero">
      <HeroSeparatorStyled>
        <h1>
          {" "}
          <h1>
            I <BsBalloonHeartFill /> BOOKS
          </h1>
        </h1>
      </HeroSeparatorStyled>
      <img
        src="/public/img/muchos-libros-apilados-con-fondo-borroso-de-librería-llena-de-libros-foto-con-copyspace.png"
        alt=""
      />
      <HeroStyled>
        <h2> Lee más, vive más </h2>
        <h2>Explora un mundo de historias</h2>
        <p>
          Navega entre nuestras categorías y descubre nuevos mundos a través de
          los libros.
        </p>
        <span>
          ¡si quieres comunicarte con nosotros completa el formulario!
        </span>

        <Button onClick={() => navigate("/Formulario")}>formulario</Button>
      </HeroStyled>
    </HeroContainer>
  );
};
