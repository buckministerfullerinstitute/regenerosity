import React, { useState, useEffect } from 'react';

import { DataService, DEFAULT_OPTIONS } from '../util/DataService';

const ProjectsPage = () => {

  const dataService = new DataService(DEFAULT_OPTIONS);
  const [projects, setProjects] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    dataService.fetchOrGetProjects().then((projects) => {
      console.log(`Fetched project list: `, projects);
      setProjects(projects);
    });
  }, []);

  return <div>
    <h1>Projects Page</h1>

    <div>Some other box</div>
  </div>
}

export default ProjectsPage;