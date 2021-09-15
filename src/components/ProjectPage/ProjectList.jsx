import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';

const ProjectList = props => {
  return (
    <section>
      <h2>Loaded Project List</h2>
      <table id="customers">
        <thead>
        <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Fund Type</th>
            <th>Donation required</th>
        </tr>
        </thead>
        <tbody>
          {props.projects.map((p) => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.name}</td>
              <td>{p.fundType}</td>
              <td>{p.donate}</td>
              
              <td>
              <Link to={/admin/ + /updateFundraiser/ + p._id} key={p._id} >
                <button onClick={props.onUpdate.bind(this, p._id)}>Update</button>
              </Link>
              </td>
              <td><button onClick={props.onRemoveProject.bind(this, p._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectList;