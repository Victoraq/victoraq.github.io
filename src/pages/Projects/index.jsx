import React from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  Card,
  CardBox,
  CardHeader,
  CardParagraph,
} from "../../components/Card";
import { Content } from "../../UI";
import { category_list } from "../../info/projects";

const ProjectsContent = styled(Content)`
  height: 100%;
  padding: 1% 5%;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 300;
  text-align: center;
  margin: 15px;
  color: ${({ theme }) => theme.text};
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5% 5% 0 0;
`;

const Label = styled(InputLabel)`
  && {
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const CategorySelect = styled(FormControl)`
  .MuiInputBase-root {
    color: ${({ theme }) => theme.secondaryText};
  }
  .MuiSelect-icon {
    color: ${({ theme }) => theme.secondaryText};
  }
  .MuiInput-underline:before {
    border-bottom: 2px solid ${({ theme }) => theme.secondaryText};
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`;

const mapCards = (projectArray) => {
  return projectArray.map((project) => {
    return (
      <Card key={project.id}>
        <Image src={project.image} />
        <CardHeader>{project.title}</CardHeader>
        <CardParagraph>{project.content}</CardParagraph>
      </Card>
    );
  });
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const Projects = ({ projects, categories, handleCategory }) => {
  const classes = useStyles();

  return (
    <ProjectsContent>
      <Title>Projects</Title>
      <CategorySelect>
        <Label id="multiple-chip">Categories</Label>
        <Select
          labelId="multiple-chip"
          id="category-mutiple-chip"
          multiple
          value={categories}
          onChange={handleCategory}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {category_list.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </CategorySelect>
      {projects.map((projectArray) => {
        return <CardBox>{mapCards(projectArray)}</CardBox>;
      })}
    </ProjectsContent>
  );
};

export default Projects;
