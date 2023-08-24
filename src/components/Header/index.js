import React from "react";
import { Container, Content, Nav, SideBar, LinkHome, Image, CollapseItems } from "./styles";
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import SvgIcon from '@material-ui/core/SvgIcon';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonLogo from '../../Assets/persona.png'
import MoneyLogo from '../../Assets/renda.png'
import PlanLogo from '../../Assets/planos.png'
import NewLogo from '../../Assets/mais.png'
import ListLogo from '../../Assets/lista.png'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Divider from '@material-ui/core/Divider'


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
   
    width: '100%',
    
   
  },
  backcolor:{
    backgroundColor: 'rgba(66, 66, 66, 0.7)',
  },
  heading: {
   
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  content: {
    color: 'white',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    marginLeft: "10px",
    marginRight: "10px",
  },
  icon: {
    marginRight: "10px",
    marginLeft: "10px",
  }

}));


function Header() {
  const classes = useStyles();
  return (
    <Container>
      <Nav>
        <ExitToAppRoundedIcon className={classes.icon} fontSize="medium"/>
        <Divider className={classes.divider} orientation="vertical" flexItem />
      <AccountCircleRoundedIcon className={classes.icon} fontSize="medium"/>
      <Divider className={classes.divider} orientation="vertical" flexItem />
      <EmailRoundedIcon className={classes.icon} fontSize="medium"/>
      </Nav>
      <SideBar>
        <h2>Team Black</h2>
        <div className={classes.root}>
        <LinkHome>
        <a href={"/"}>
        
        <HomeIcon />
        <li>Home</li></a></LinkHome>
    
      <Accordion className={classes.backcolor}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        > <Image src={PersonLogo} />
          <Typography className={classes.heading}>Alunos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <CollapseItems>
            <a href={"/students"} className={classes.content}>
            <Image src={ListLogo}/>Alunos 
              </a><br/>
              <Divider className={classes.root}/>
              
              <a href={"/students/new"} className={classes.content}>
              <Image src={NewLogo}/>Novo Aluno 
              </a> 

            </CollapseItems>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.backcolor}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        > <Image src={MoneyLogo}/>
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
        ><Image src={PlanLogo} />
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
