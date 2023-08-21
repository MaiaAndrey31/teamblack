import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container} from './styles'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function NewUserForm() {
  const classes = useStyles();


  
  return (

    <Container>

      <h3>Cadastrar aluno</h3>

    <form className={classes.root} noValidate autoComplete="off">
      
      
      <div>
      
       
        <TextField
          id="outlined-textarea-fullWidth"
         
          label="Nome Completo"
          placeholder=""
          fullWidth
          variant="outlined"
        />
         <TextField
          id="outlined-textarea"
          label="Endereço"
          placeholder=""
          multiline
          variant="outlined"
        />
        <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  /><br/>
         <TextField
          id="outlined-textarea"
          label="Complemento"
          
          placeholder=""
          multiline
          variant="outlined"
        />
         <TextField
          id="outlined-textarea"
          label="Email"
          type="email"
          placeholder=""
          multiline
          variant="outlined"
        />
        
        
      </div>
    </form>
    <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Salvar Cadastro
    
      </Button>

    </Container>
  );
}