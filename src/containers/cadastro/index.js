import React from "react";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Footer } from "./styles";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { green } from '@material-ui/core/colors'
import Divider from '@material-ui/core/Divider'
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';

  
  

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(5),

    width: "25ch",
  },
  small: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(5),
    width: '20ch',
  },
  formControl: {
    marginTop: theme.spacing(5),
    minWidth: "25ch",
  },
  buttonStyle: {
    display: 'flex',
    fontWeight: 'bold',
    marginBottom: 20,
    
    maxHeight: 50,
   
    
  },
  divider: {
    width: '96.5%',
  
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },})

export default function NewUserForm() {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Container>
      <h3>Cadastrar aluno</h3>
      <Divider className={classes.divider} />
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-textarea"
            className={classes.textField}
            label="Nome Completo"
            type="Text"
            placeholder=""
            multiline
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="outlined-textarea"
            type= "adress"
            label="Apelido"
            placeholder=""
            fullWidth
            variant="outlined"
          />
          <TextField
            id="date"
            label="Data de Nascimento"
            type="date"
            defaultValue="XX-XX-XXXX"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Gênero</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gender}
          onChange={handleChange}
          label="Gênero"
        >
          <MenuItem value={10}>Masculino</MenuItem>
          <MenuItem value={40}>Feminino</MenuItem>
          <MenuItem value={20}>Outro</MenuItem>
          <MenuItem value={30}>Prefere não dizer</MenuItem>
          
        </Select>
      </FormControl>

          
          <TextField
            className={classes.textField}
            id="outlined-textarea"
            label="Email"
            type="email"            
            placeholder=""
            multiline
            variant="outlined"
          />
          
          
          
          <TextField
            label="Telefone fixo"
            id="outlined-margin-none"
            
            className={classes.textField}           
            variant="outlined"
          />
        
          <TextField
            label="Celular"
            id="outlined-margin-dense"
          
            className={classes.textField}
            variant="outlined"
          /><br/>
          <TextField
            className={classes.textField}
            id="outlined-textarea"
            label="Cep"
            placeholder=""
            multiline
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="outlined-textarea"
            label="Endereço"
            placeholder=""
            multiline
            variant="outlined"
          />
          <TextField
            className={classes.small}
            id="outlined-textarea"
            label="Nº"
            placeholder=""
            multiline
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            id="outlined-textarea"
            label="Complemento"
            placeholder=""
            multiline
            variant="outlined"
          />
        </div>
      </form>
      <Footer>
      <ThemeProvider theme={theme}>
      <Button
      
        variant="contained"
        color="primary"
        size="small"
        className={classes.buttonStyle}
        startIcon={<DoneRoundedIcon/>}
      >
        Salvar Cadastro
      </Button>
      </ThemeProvider>
      </Footer>
    </Container>
  );
}
