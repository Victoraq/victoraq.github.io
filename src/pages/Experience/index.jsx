import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Timeline from "@material-ui/lab/Timeline";
import Typography from "@material-ui/core/Typography";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
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
  },
}));

const Icon = styled.img`
  width: 70px;
  margin: 5%;

  @media (max-width: 800px) {
    width: 45px;
  }
`;

const Experience = ({ experience }) => {
  const classes = useStyles();

  return (
    <Content>
      <Timeline align="left">
        {experience.map((experience) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent className={classes.oppositeContent}>
                <Typography variant="body2" color="textSecondary">
                  {experience.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <Icon src={experience.image} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {experience.title}
                  </Typography>
                  <ul>
                    {experience.content.map((topic) => {
                      return (
                        <li>
                          <Typography>{topic}</Typography>
                        </li>
                      );
                    })}
                  </ul>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Content>
  );
};

export default Experience;
