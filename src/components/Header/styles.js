import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 17% 83%;
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
  margin-left: -30px;

  margin-right: 1px;

  background-color: #ff7f50;
  h1 {
    margin: 15px;
  }
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #404040;
  grid-area: Sidebar;
  height: 100vh;
  box-shadow: 0px 5px 5px 6px rgba(0, 0, 0, 0.2);
  border-radius: 0px 15px 15px 0px;
  z-index: 2;
  h2 {
    color: #ebebeb;
    padding: 2px;
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

export const Image = styled.img`
color: white;
width: 35px;
padding-right: 15px;
`

export const Content = styled.div`
  min-height: auto;
`;

export const LinkHome = styled.h6`
width: 100%;
font-size: 20px;
display: flex;

justify-content: center;
align-items: center;
gap: 1rem;
height: 50px;
  background-color: rgb(66, 66, 66);
   li{
    
    list-style: none;
   }
   a{
    display: flex;
    gap: 15px;
    text-decoration: none;
    color: #ebebeb;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  font-weight: 900;
  cursor: pointer;
  justify-content: center;
align-items: center;
   }
`
export const CollapseItems = styled.ul`

  a{
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 5px;
    text-decoration: none;
    color: #ebebeb;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  font-weight: 900;
  cursor: pointer;
  }
  li{
    list-style: none;
  }

  
`;
