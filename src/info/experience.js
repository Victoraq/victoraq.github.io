import ufjf from "../assets/images/ufjf.png";
import rnp from "../assets/images/RNP.png";
import netlab from "../assets/images/NetLab.png";

export const experience_data = {
  updates: [
    {
      id: 0,
      title: "Computer Science Bachelor",
      date: "March, 2017 - Now",
      content: ["Federal University of Juiz de Fora"],
      image: ufjf,
    },
    {
      id: 1,
      title: "Data scientist Scientific Initiation",
      date: "August, 2017 - Now",
      content: [
        "Researcher in Data Analysis of Urban Mobility field. We wrote a total of 5 papers, where 3 are local workshop articles and 2 are international papers.",
        "Gathered, cleaned, and analyzed car-sharing data. That results in characterizations on several systems patterns and demand time series prediction.",
        "Learned and applied a wide range of data science skills, from data mining to machine learning and deep learning applications in time series.",
      ],
      image: netlab,
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      date: "August 2019 - July 2020",
      content: [
        "We developed a data analysis system to track and analyze institution network health.",
        "Organized team tasks, help in the tools selection, and learn how to build a product to turn it into a startup.",
        "Build Docker containers to orchestrate all the services of the application, like databases, Grafana dashboards, and the Flask backend API.",
      ],
      image: rnp,
    },
    {
      id: 3,
      title: "Backend Developer Freelancer",
      date: "July 2020 - January 2021",
      content: [
        "Backend development to repair and develop a process automation project.",
        "Improved a legacy system by developing new backend features, like the user administration and Puppet system requirements.",
        "Worked intensively over the documentation and fixing the old infrastructure.",
        "The backend was developed with Django together with Docker to build the microservice infrastructure and Puppet to perform the automation processes.",
      ],
      image: rnp,
    },
  ],
};
