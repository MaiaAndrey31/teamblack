import React from "react";
import { Container, Content, Nav, SideBar } from "./styles";
import { Outlet } from 'react-router-dom'

function Header() {
  return (
    <Container>
      <Nav>
        <h1>Layout</h1>
      </Nav>
      <SideBar>
        <h2>Team Black</h2>
        <p>Alunos</p>
        <p>Planos</p>
        <p>Financeiro</p>
        
      </SideBar>
      <Content>
<Outlet/>

      </Content>
    </Container>
  );
}

export default Header;
