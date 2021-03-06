import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const ProjectCardComponent = props => {
  const navigateToProjectDetailPage = () => {
    const path = `/projects/${props.projectEntity.id}`;
    console.log(`Pushing path to navigation history: ${path}`);
    props.history.push(path);
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.projectEntity.image}
        title={props.projectEntity.project}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.projectEntity.project}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.projectEntity.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Donate
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={navigateToProjectDetailPage}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default withRouter(ProjectCardComponent);
