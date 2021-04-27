import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import ufjf from "../../assets/images/ufjf.png";
import rnp from "../../assets/images/RNP.png";
import netlab from "../../assets/images/NetLab.png";
import Paper from "@material-ui/core/Paper";
import { Content } from "../../UI";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    marginBottom: "25px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  oppositeContent: {
    flex: 0.2,
  }
}));

const Icon = styled.img`
  width: 70px;
  margin: 5%;
  // filter: ${({ theme }) => theme.filter};

  @media (max-width: 800px) {
    width: 45px;
  }
`;

const Experience = () => {
  const classes = useStyles();
  return (
    <Content>
      <Timeline align="left">
        <TimelineItem>
          <TimelineOppositeContent className={classes.oppositeContent}>
            <Typography variant="body2" color="textSecondary">
              March, 2017 - Now
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Icon src={ufjf} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Computer Science Bachelor
              </Typography>
              <Typography>Federal University of Juiz de Fora</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.oppositeContent}>
            <Typography variant="body2" color="textSecondary">
              August, 2017 - Now
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Icon src={netlab} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Data scientist Research Intern
              </Typography>
              <Typography>- topic 1</Typography>
              <Typography>- topic 2</Typography>
              <Typography>- topic 3</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.oppositeContent}>
            <Typography variant="body2" color="textSecondary">
              August 2019 - July 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
          <Icon src={rnp} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Backend Developer Intern
              </Typography>
              <Typography>- topic 1</Typography>
              <Typography>- topic 2</Typography>
              <Typography>- topic 3</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className={classes.oppositeContent}>
            <Typography variant="body2" color="textSecondary">
              July 2020 - January 2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
          <Icon src={rnp} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Backend Developer Freelancer
              </Typography>
              <Typography>- topic 1</Typography>
              <Typography>- topic 2</Typography>
              <Typography>- topic 3</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Content>
  );
};

export default Experience;
