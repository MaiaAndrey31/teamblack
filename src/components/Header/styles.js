import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 17% 83%;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    "Sidebar Nav   "
    "Sidebar Content   ";
`;

export const Nav = styled.div`
  grid-area: Nav;
  border-radius: 10px;
  height: 6vh;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: 5px;
  margin-right: 10px;

  background-color: #ff7f50;
  box-shadow: inset 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
  h1 {
    margin: 15px;
  }
`;
export const SideBar = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #404040;
  grid-area: Sidebar;
  margin-top: 5px;
  height: 98vh;
  box-shadow: 0px 5px 5px 6px rgba(0, 0, 0, 0.2);
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

export const Image = styled.img`
  color: white;
  width: 35px;
  padding-right: 15px;
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
  gap: 1rem;
  height: 50px;
  background-color: rgb(66, 66, 66);
  li {
    list-style: none;
  }
  a {
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
`;
export const CollapseItems = styled.ul`
  a {
    display: flex;
    flex-direction: column;
    padding: 5px;
    text-decoration: none;
    color: #ebebeb;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    font-weight: 900;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
`;
