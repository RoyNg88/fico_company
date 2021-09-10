import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProjectForm.css';

const url = 'https://project-detail-default-rtdb.asia-southeast1.firebasedatabase.app/project-detail.json';

const ProjectForm = React.memo(props => {
    const [projectData, setProjectData] = useState('');
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [fundType, setFundType] = useState(['','Medical', 'Food', 'Shelter', 'Education']);
    const [date, setDate] = useState('');
    const [donate, setDonate] = useState('');
    
    const history = useHistory();

    const addData = (project) => {
       
      fetch( url , {
        method: 'POST',
        body: JSON.stringify(project),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
          return response.json()})
        .then( data => {
        setProjectData(prevData => [
          ...prevData,

          /*Using Firebase, property 'name' = unique id (create by Firebase)  */ 
          { id: data.name, ...project}
        ]);
      }).then(response => history.goBack());

      console.log(projectData);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        addData({ title: title, name: name, address: address, 
          fundType: fundType, date: date, donate: donate});
    }

    const handleFundTypeChange = (e) => { 
      setFundType(fundType[e.target.value]) 
        }
    
    return (
      <section className="project-form">
        <form onSubmit={submitHandler}>

        <div className="form-control"> 
          <label>Title: </label>
          <input id="title" type="text"
          value={title}
          onChange={event => setTitle(event.target.value)} required/>
        </div>

        <div className="form-control"> 
          <label>Name: </label>
          <input id="name" type="text" 
          value={name}
          onChange={event => setName(event.target.value)} required/>
        </div>

        <div className="form-control">
          <label>Address: </label>
          <input id="address" type="text"
          value={address}
          onChange={event => setAddress(event.target.value)} required/>
        </div>

        <div className="form-control">
          <label>
            Type of Fundraising:------ 
            < select
              onChange={e => handleFundTypeChange(e)}>
              <option value='0'>...</option>
              <option value='1'>Medical</option>
              <option value='2'>Food</option>
              <option value='3'>Shelter</option>
              <option value='4'>Education</option>
          </select >
          ------
          </label>
        </div>

        <div className="form-control">
          <label>Date (End the donation): </label>
          <input id="date" type="text"
          value={date}
          onChange={event => setDate(event.target.value)} required/>
        </div>

        <div className="form-control">
          <label>Total Donate requirement: </label>
          <input id="donate" type="number" 
          value={donate}
          onChange={event => setDonate(event.target.value)} required/>
        </div>

        <div className="project-form__actions">
          <button type="submit">Submit</button>
        </div>
    </form>

    </section>
    );
});

export default ProjectForm;