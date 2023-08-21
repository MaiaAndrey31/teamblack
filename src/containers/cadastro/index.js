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

    width: "25ch",
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
  }
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

      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-textarea"
            className={classes.fullLarge}
            label="Nome Completo"
            type="Name"
            placeholder=""
            fullWidth
            variant="outlined"
          />
          <TextField
            className={classes.fullLarge}
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
            label="Birthday"
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
          label="Age"
        >
          <MenuItem value="">
            <em>Masculino</em>
          </MenuItem>
          <MenuItem value={10}>Feminino</MenuItem>
          <MenuItem value={20}>Outro</MenuItem>
          <MenuItem value={30}>Prefere não dizer</MenuItem>
        </Select>
      </FormControl>
          
          <TextField
            label="None"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
           
            variant="outlined"
          />
        
          <TextField
            label="Dense"
            id="outlined-margin-dense"
            defaultValue="Default Value"
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
