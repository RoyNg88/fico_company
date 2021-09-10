import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';

import ProjectList from './ProjectList';
import Search from './Search';

function ProjectPage() {
    const [projectDetail, setProjectDetail] = useState([]);

    const filterProject = useCallback((project) => {
      setProjectDetail(project);
    }, []);

      useEffect(() => {
        console.log('Rendering project', projectDetail)
      }, [projectDetail]);

    const removeProject = (id) => {
      var message = window.confirm("Do you want to delete the project?");

      if (message){
        fetch( `https://project-detail-default-rtdb.asia-southeast1.firebasedatabase.app/project-detail/${id}.json` , {
          method: 'DELETE',
        }).then(response => {
          setProjectDetail(prevProjects => [
            prevProjects.filter(project => project.id !== id)
          ]);
        }).then(response => window.location.reload())

      }
    };

    return (
        <div>
          <Link to="/projectform">Post Project</Link>


          <Search onloadedProjects={filterProject}/>
          
          <ProjectList projects={projectDetail}
          onRemoveProject={removeProject}/> 
        </div>
      );
}

export default ProjectPage;