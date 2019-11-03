import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


import { Doughnut } from 'react-chartjs-2';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontWeight: "bolder",
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    'text-align': 'center'
  },
});

export default function ProjectKpiCardComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.projectKpiEntity.kpiname}
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          <h2>{props.projectKpiEntity.kpivalue}</h2>
        </Typography>
        <hr/>
        <Typography className={classes.toltipText} color="textSecondary">
          {props.projectKpiEntity.tooltip_text}
        </Typography>
        <Typography className={classes.sgggoal} color="textSecondary">
          SDG Goal
          <br/>
          {props.projectKpiEntity.sgdgoal}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Tooltip title={props.projectKpiEntity.tooltip_text} placement="top">
          <Button size="small">Learn More</Button>
        </Tooltip> */}
      </CardActions>
    </Card>
  );
}