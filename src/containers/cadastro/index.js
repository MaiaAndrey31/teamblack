import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from "./styles";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider'


  
  

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),

    width: "30ch",
  },
  fullLarge: {
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "25ch",
  },
  buttonStyle: {
    marginRight: -800,
   
    padding: 15
  },
  divider: {
    width: '96.5%',
  
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
}));

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
            label="Endereço"
            placeholder=""
            fullWidth
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
          <MenuItem value={10}>Feminino</MenuItem>
          <MenuItem value={20}>Outro</MenuItem>
          <MenuItem value={30}>Prefere não dizer</MenuItem>
          
        </Select>
      </FormControl>
          
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
          />
        </div>
      </form>
      <Button
      
        variant="contained"
        color="primary"
        size="large"
        className={classes.buttonStyle}
        startIcon={<SaveIcon />}
      >
        Salvar Cadastro
      </Button>
    </Container>
  );
}
