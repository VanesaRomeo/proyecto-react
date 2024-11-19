import styled from "styled-components";
import PropTypes from 'prop-types';


const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Layout = ({children}) => {
  return (
    <>
   
    <LayoutWrapper>{children}</LayoutWrapper >
    
    </>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
