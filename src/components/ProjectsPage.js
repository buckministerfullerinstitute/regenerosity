import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ProjectCardComponent from './ProjectCardComponent';
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

  const mediaCardsOfProjectEntities = projectEntities.map((aProjectEntity) => {
    return <Grid item xs={4}>
      <ProjectCardComponent projectEntity={aProjectEntity} key={aProjectEntity.id} ></ProjectCardComponent >;
      </Grid>
  });

  return <div>
    <Container maxWidth="lg" >
      <h1>Projects</h1>
      <Grid container spacing={3}>
        {mediaCardsOfProjectEntities}
      </Grid>
    </Container>
  </div>
}

export default ProjectsPage;