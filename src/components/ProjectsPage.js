import React, { useState, useEffect } from 'react';

import { DataService, DEFAULT_OPTIONS } from '../util/DataService';

const ProjectsPage = () => {

  const dataService = new DataService(DEFAULT_OPTIONS);
  const [projectEntities, setProjectEntities] = useState([]);

  useEffect(() => {
    dataService.fetchOrGetProjects().then((projects) => {
      console.log(`Fetched project list: `, projects);
      setProjectEntities(projects);
    });
  }, []);

  return <div>
    <h1>Projects Page</h1>

    <div>Some other box</div>
  </div>
}

export default ProjectsPage;