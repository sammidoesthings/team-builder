import './App.css';
import { useState } from 'react';
import Member from './Members';
import MemberForm from './MemberForm';

const initialFormValues = {
  //TEXT INPUTS
  username: '',
  email: '',
  //DROPDOWN
  role: '',
}

function App() {

  const [members, setMembers] = useState([]);
  const [errorText, setErrorText] = useState('');
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      setErrorText("You have to fill out all fields in the form before submitting.");
      return;
    }

  }

  return (
    <div className="App">
      <h1>Do Things With Sammi!</h1>
      <h2>Team Member Submission Form</h2>
      <MemberForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      errorText={errorText}
      ></MemberForm>


    </div>
  );
}

export default App;
