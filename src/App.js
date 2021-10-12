import './App.css';
import { useState } from 'react';
import Member from './Members';
import MemberForm from './MemberForm';

const initialFormValues = {
  name: '',
  email: '',
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
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    if (!newMember.name || !newMember.email || !newMember.role) {
      setErrorText("You have to fill out all fields in the form before submitting.");
      return;
    } else {
      setMembers([...members, newMember]);
      setFormValues(initialFormValues);
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
      />
      <div>
      {members.map(members => {
        return (
          <Member key={members.role} details={members}/>
        )
      }
      )}
      </div>
    </div>
  );
}

export default App;
