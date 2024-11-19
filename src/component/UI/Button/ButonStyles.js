import styled from "styled-components";
import { motion } from 'framer-motion';


export const ButtonStylesConteiner = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: rgba(255, 255, 255, 0.1);
  color: rgba(17, 15, 50, 0.75);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  width: 150px;
margin: 15px;





  &:hover {
    opacity: 95%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
 

`