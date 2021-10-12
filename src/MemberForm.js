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
    <form className='form-container' onSubmit={onSubmit}>
        <h2 className="error">{errorText}</h2>
        <div className='form-group-inputs'>
            <label>Name
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    maxLength='30'
                    placeholder='Enter Name Here'
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
                    <option value=''>-- Select a Platform! --</option>
                    <option value='twitch'>Twitch Mod</option>
                    <option value='discord'>Discord Mod</option>
                    <option value='youtube'>YouTube Mod</option>
                </select>
            </label>
        </div>
        <div className='submit'>
            <button>Submit Your Form</button>
        </div>

    </form>
)
}

export default MemberForm;