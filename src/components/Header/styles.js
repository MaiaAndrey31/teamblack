import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 19% 81%;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    "Sidebar Nav   "
    "Sidebar Content   ";
`;

export const Nav = styled.div`
  grid-area: Nav;
  height: 7vh;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-right: 0;
  background-color: #ff7f50;
  box-shadow: 0px 5px 10px 6px rgba(0, 0, 0, 0.4);
  h1 {
    margin: 15px;
  }
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #424242;
  grid-area: Sidebar;
  height: 100vh;
  box-shadow: 0px 5px 10px 6px rgba(0, 0, 0, 0.4);
  h2 {
    color: #ebebeb;
    padding: 25px;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    font-weight: 900;
    border-bottom: 1px solid #000000;
  }
  p {
    color: #ebebeb;

    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    font-weight: 900;
  }
`;
export const Content = styled.div`
  min-height: auto;
`;

export const LinkHome = styled.h6`
width: 100%;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
  background-color: rgb(66, 66, 66);
  
 
  a{
    text-decoration: none;
    color: #ebebeb;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  font-weight: 900;
  cursor: pointer;
  }
  
`;
