import { MenuContainer } from "./MenuHamburguesaStyles";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";

export const MenuHamburguesa = ({ handleClicked }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onClick={handleClicked}
      style={{ cursor: "pointer" }}
    >
      <MenuContainer>
        <TiThMenu />
      </MenuContainer>
    </motion.div>
  );
};
console.log(MenuHamburguesa);
