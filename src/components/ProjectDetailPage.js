import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { DataService, DEFAULT_OPTIONS } from '../util/DataService';
import ProjectKpiCardComponent from './ProjectKpiCardComponent';

const useStyles = makeStyles({
  cardActions: {
    display: 'grid'
  },
  videoDiv: {
    'text-align': 'center'
  },
  button: {
  },
  container: {
    paddingTop: 15
  },
  card: {
    padding: 10
  },
  media: {
    height: 240,
  },
});

export function ProjectDetailPage(props) {

  const dataService = new DataService(DEFAULT_OPTIONS);
  const [projectEntity, setProjectEntity] = useState({});
  const [projectKpiCardComponents, setProjectKpiCardComponents] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    dataService.fetchOrGetProjectById(props.match.params.id).then((projectEntity) => {
      console.log(`Fetched project entity by id: ${props.projectId}`, projectEntity);

      const newProjectKpiCardComponents = projectEntity.kpis.map((aProjectKpiEntity) => {
        return (
          <Grid item xs={4} key={aProjectKpiEntity.id}>
            <ProjectKpiCardComponent
              key={aProjectKpiEntity.id}
              projectKpiEntity={aProjectKpiEntity}
            ></ProjectKpiCardComponent>
          </Grid>
        );
      });

      setProjectEntity(projectEntity);
      setProjectKpiCardComponents(newProjectKpiCardComponents);
    });
  }, []);


  return <div>
    <Container maxWidth="lg" className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={projectEntity.image}
            title={projectEntity.project}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              {projectEntity.project}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {projectEntity.description}
            </Typography>
            <Typography gutterBottom variant="h5" component="h4">
              <br />
              Key Performance Indicators
            </Typography>
            <Grid container spacing={3}

              alignItems="center">
              {projectKpiCardComponents}
            </Grid>
            <Typography gutterBottom variant="h5" component="h4">
              <br />
              Video Pitch
            </Typography>
            {/* FIXME: Remove the usage of dangerouslySetInnerHTML, it is not safe. */}
            <div className={classes.videoDiv} dangerouslySetInnerHTML={{ __html: projectEntity.videoembed }}>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button
          onClick={()=> window.open("https://support.bfi.org/campaign/support-bfi-today/c201526", "_blank")}
            variant="contained"
            color="primary"
            className={classes.button}>
            Donate
      </Button>

        </CardActions>
      </Card>
    </Container>
  </div>
};