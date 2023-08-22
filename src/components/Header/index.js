import React from "react";
import { Container, Content, Nav, SideBar } from "./styles";
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
   
    width: '100%',
    
   
  },
  backcolor:{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  heading: {
   
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


function Header() {
  const classes = useStyles();
  return (
    <Container>
      <Nav>
        <h1>Layout</h1>
      </Nav>
      <SideBar>
        <h2>Team Black</h2>
        <div className={classes.root}>
      <Accordion className={classes.backcolor}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Alunos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.backcolor}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Financeiro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.backcolor}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Planos</Typography>
        </AccordionSummary>
      </Accordion>
    </div>

      </SideBar>
      <Content>
<Outlet/>

      </Content>
    </Container>
  );
}

export default Header;
