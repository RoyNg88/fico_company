import React, {useState, useEffect, useCallback, useParams } from 'react';
import { Link } from 'react-router-dom';

import ProjectList from './ProjectList';



function ProjectPage() {
    const [projectDetail, setProjectDetail] = useState([]);
    const endPoint = "http://localhost:4001/api/fundraiser";
    const [token, setToken] = useState('');
    const filterProject = useCallback((project) => {
      setProjectDetail(project);
    }, []);


  //get data from api
  const load = (id) => {
  fetch(endPoint)
    .then(response => response.json())
    .then(data =>
      {   data.filter(project => project.id !== id)
          console.log(data)
          setProjectDetail(data)
      }      
      );
}

//delete data from api
    const removeProject = (id) => {
      var message = window.confirm("Do you want to delete the project?");

      if (message){
        fetch( `http://localhost:4001/api/fundraiser/${id}`
        , {

          method: 'DELETE',
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }, 
        })   
          .then(response => {
          setProjectDetail(prevProjects => [
          prevProjects.filter(project => project.id !== id)
          ]);
        }).then(response => window.location.reload())
      }
    };
    useEffect(() => {
      setToken(sessionStorage.getItem('token'))
      load()

    }, []);

    return (
        <div>
          
          <ProjectList  projects={projectDetail}
          onRemoveProject={removeProject}/> 
        </div>
      );
}

export default ProjectPage;