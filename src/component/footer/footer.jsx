// import { Link } from "react-router-dom";
import { BsBalloonHeartFill } from "react-icons/bs";
import { ContainerFooter, ContainerLinks } from "./footerStyles";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
const footer = () => {
  return (
    <ContainerFooter>
      <p>
        I <BsBalloonHeartFill /> BOOKS{" "}
      </p>
      <ContainerLinks>
        <Link to="/" style={{ paddingLeft: "2rem" }}>
          <FaFacebook /> I.books
        </Link>

        <Link to="/" style={{ paddingLeft: "2rem" }}>
          <AiFillInstagram />
          Ilovebooks
        </Link>
      </ContainerLinks>
      <Link to="/" style={{ paddingLeft: "2rem" }}>
        Derechos de autor
      </Link>
    </ContainerFooter>
  );
};

export default footer;
