import React from 'react';
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
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.name}</td>
              <td>{p.fundType}</td>
              <td>{p.donate}</td>

              <td><button onClick={props.onRemoveProject.bind(this, p.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectList;