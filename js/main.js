const humbergerToggle = document.querySelector('.mobile-nav');
const links = document.querySelectorAll('.desktop-nav .link');

humbergerToggle.addEventListener('click', () => {
  document.body.classList.toggle('change-mobile-nav');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('change-mobile-nav');
  });
});

// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = () => {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

const projects = [
  {
    name: 'ZIDI',
    tag: ['Truweb Solutions', 'Software Developer', 2022],
    description:
      'Zidi is a code sharing platform that aims to provide clean, universally acceptable code for all backend processes in all major languages. Anticipating to develop productivity tools for backend developers to make their work easier. Built with: jQuery, PHP, NodeJs and MySQL',
    featured_img: 'img/project1_desktop_bg.png',
    tech: ['NodeJs', 'PHP', 'jQuery', 'Bootstrap', 'MySQL'],
    linkToLiveProject: 'https://zidiapp.com/',
    linkToProjectSource: 'https://github.com/devMunyi/zidi-app',
  },
  {
    name: 'Morning Dew',
    tag: ['Freelancer', 'Software Developer', 2021],
    description:
      'Morning Dew is online plaftom that allows visitors to book rooms and is integrated with stripe payment gateway. Built with: ReactJs, NodeJs and MongoDB.',
    featured_img: 'img/project2.png',
    tech: ['ReactJs', 'NodeJs', 'MongoDB', 'Bootstrap'],
    linkToLiveProject: 'https://morning-dew.herokuapp.com/home',
    linkToProjectSource: 'https://github.com/devMunyi/morning-dew',
  },

  {
    name: 'POS',
    tag: ['Freelancer', 'Software Developer', 2021],
    description:
      "An online store used to manage shop sales. Manages both Cash and Credit sales. Built with: Vanilla JavaScript, jQuery, PHP and MySQL",
    featured_img: 'img/project3.png',
    tech: ['Vanilla JavaScript', 'JQuery', 'PHP', 'MySQL'],
    linkToLiveProject: 'https://apa-shop.herokuapp.com/dashboard',
    linkToProjectSource: 'https://github.com/devMunyi/POS',
  },
  {
    name: 'Todo List',
    tag: ['Microverse', 'Student', 2022],
    description:
      'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    featured_img: 'img/project4.png',
    tech: ['JavaScript', 'HTML', 'CSS', 'Webpack'],
    linkToLiveProject: 'https://devmunyi.github.io/todo-list/',
    linkToProjectSource: 'https://github.com/devMunyi/todo-list',
  },
];

// get the project name

const projectName = document.getElementById('project-name');
const projectDescription = document.getElementById('project-desc');
const projectImage = document.getElementById('project-img');
const projectLiveLink = document.getElementById('live_url');
const projectSourceLink = document.getElementById('source_url');
const techOne = document.getElementById('tech-1');
const techTwo = document.getElementById('tech-2');
const techThree = document.getElementById('tech-3');
const tagOne = document.getElementById('tag-1');
const tagTwo = document.getElementById('tag-2');
const tagThree = document.getElementById('tag-3');

/* eslint-disable no-unused-vars */
function seeProjectDetails(projectIndex) {
  const project = projects[projectIndex];
  projectName.textContent = project.name;
  const [firstTag, secondTag, thirdTag] = project.tag;
  tagOne.textContent = firstTag;
  tagTwo.textContent = secondTag;
  tagThree.textContent = thirdTag;
  projectImage.src = project.featured_img;
  projectDescription.textContent = project.description;
  const [firstTech, secondTech, thirdTech] = project.tech;
  techOne.textContent = firstTech;
  techTwo.textContent = secondTech;
  techThree.textContent = thirdTech;
  projectLiveLink.href = project.linkToLiveProject;
  projectSourceLink.href = project.linkToProjectSource;

  // display modal
  modal.style.display = 'block';
}

// ===========Begin Form validation============

// show a message with a type of the input
const form = document.getElementById('contact-form');

function isLowerCase(input) {
  return input === String(input).toLowerCase();
}

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // get email value from the form
  const userEmail = form.elements.user_email.value;
  // check if the email is lowercase
  const emailIsLowerCase = isLowerCase(userEmail);

  // get the element to display email error
  const emailErrorInput = document.getElementById('email_msg');

  if (emailIsLowerCase) {
    emailErrorInput.innerHTML = '';
    // submit the form
    form.submit();
  } else {
    // show an error
    emailErrorInput.innerHTML = 'Your email should be in lowercase';
  }
});

// =============== End Form Vaildation ===========

// ================ Begin Form Data persistence to LocalStorage ==========

// set form data
function setFormData() {
  // get portfolio visitor's data from the localstorage as an object
  const portfolioVisitor = JSON.parse(localStorage.getItem('portfolioVisitor'));

  // distructure the object to get individual form inputs values
  const { username, userEmail, userMessage } = portfolioVisitor;

  // set the distructured values to their corresponding form inputs
  document.getElementById('user_name').value = username;
  document.getElementById('user_email').value = userEmail;
  document.getElementById('message').value = userMessage;
}

// persist form data in localstorage
function populateStorage() {
  // get the values of form fields you want to keep track of
  const username = document.getElementById('user_name').value;
  const userEmail = document.getElementById('user_email').value;
  const userMessage = document.getElementById('message').value;

  // create an object with portfolio visitor information
  const portfolioVisitor = { username, userEmail, userMessage };

  // store the portfolio visitor data as a JSON string in localstorage
  localStorage.setItem('portfolioVisitor', JSON.stringify(portfolioVisitor));

  // call the form inputs updater, to keep their values in sync with what is in localstorage
  setFormData();
}

// check whether localstorage is populated
if (!localStorage.getItem('portfolioVisitor')) {
  // if not populate it
  populateStorage();
} else {
  // if populated set available values to form fields
  setFormData();
}

// ================ End Form Data Persistence to LocalStorage ==============
