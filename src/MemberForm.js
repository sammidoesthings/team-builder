import React from 'react';

function MemberForm(props){
const { values, update, submit, errorText } = props;

const onChange = evt => {
    const name =evt.target.name;
    const value = evt.target.value;
    update(name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

return (
    <div className='form-container' onSubmit={onSubmit}>
        <h2 className="error">{errorText}</h2>
            {/* TEXT INPUTS HERE
            TEXT INPUTS HERE 
            TEXT INPUTS HERE  */}
        <label>Username
            <input 
                type='text'
                name='username'
                value={values.username}
                onChange={onChange}
                maxLength='30'
                placeholder='Enter Username Here'
            />
            </label>

        <label>Email
            <input 
                type='email'
                name='email'
                value={values.email}
                onChange={onChange}
                placeholder='Enter Email Here'
            />
        </label>

        <label>Role
            <select value={values.role} name='role' onChange={onChange}>
                <option value=''>-- Select a Role --</option>
                <option value='Editor'>Editor</option>
                <option value='Writer'>Writer</option>
                <option value='Cameraperson'>Cameraperson</option>
            </select>
        </label>

        <div className='submit'>
            <button>Submit Your Form</button>
        </div>

    </div>
)
}

export default MemberForm;