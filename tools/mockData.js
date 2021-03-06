const courses = [
  {
    id: 1,
    title: "Sercuring React Apps wiTH Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "Javascript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "Javascript"
  },
  {
    id: 3,
    title: "Creating Resuable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "Javascript"
  },
  {
    id: 4,
    title: "Building a Javascript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "Javascript"
  },
  {
    id: 5,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "Javascript"
  },
  {
    id: 6,
    title: "Building Applications in React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "Javascript"
  },
  {
    id: 7,
    title: "Clean Code: Wrirting Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architeching Applications for the Real World",
    slug: "achitecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture "
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming for Developer Mind",
    slug: "create-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Components Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  },
];


const authors = [
  {id: 1, name: "Israel AyoOluwa"},
  {id: 2, name: "Rasheed Olajuwon"},
  {id:3, name: "Dan Wahlin"}
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};


module.exports ={
  newCourse, courses, authors
}

