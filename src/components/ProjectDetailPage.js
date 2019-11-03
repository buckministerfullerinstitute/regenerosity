import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { DataService, DEFAULT_OPTIONS } from '../util/DataService';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export function ProjectDetailPage(props) {

  const dataService = new DataService(DEFAULT_OPTIONS);
  const [projectEntity, setProjectEntity] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    dataService.fetchOrGetProjectById(props.match.params.id).then((projectEntity) => {
      console.log(`Fetched project entity by id: ${props.projectId}`, projectEntity);
      setProjectEntity(projectEntity);
    });
  }, []);

  return <div>
    <Container maxWidth="lg" >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={projectEntity.image}
            title={projectEntity.project}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {projectEntity.project}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {projectEntity.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Donate
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    </Container>
  </div>
};