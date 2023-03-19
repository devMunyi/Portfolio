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
    name: 'Doctor Appointment',
    tag: ['Micronaut', 'Software Developer Training', 2023],
    description:
      'This application consists of a front-end react app, that relies on a rails backend, to allow a user to book an appointment with a doctor, from the list of doctors available.',
    featured_img: './img/capstone/doctors-booking.png',
    tech: ['ReactJs', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    linkToLiveProject: 'https://main--glittering-beignet-46c582.netlify.app/',
    linkToProjectSource: 'https://github.com/devMunyi/booking-frontend',
  },
  {
    name: 'CRYPTO METRICS',
    tag: ['Micronaut', 'Software Developer Training', 2023],
    description:
      'The app shows real-time data for cryptocurrencies\' current pricing and market activity. The data used is fetched from blockchain API.',
    featured_img: './img/crytpo-metrics/cryptos.png',
    tech: ['JavaScript', 'ReactJs', 'Redux', 'External API'],
    linkToLiveProject: 'https://cryptocurrencies-metrics.netlify.app/',
    linkToProjectSource: 'https://github.com/devMunyi/crypto-metrics',
  },
  {
    name: 'ZIDI',
    tag: ['Truweb Solutions', 'Software Developer', 2022],
    description:
      'A code-sharing platform that aims to provide clean, universally acceptable code for all backend processes in all major languages. Anticipating to develop productivity tools for backend developers to make their work easier.',
    featured_img: './img/zidiapp/index.png',
    tech: ['NodeJs', 'jQuery', 'Bootstrap', 'MySQL'],
    linkToLiveProject: 'https://zidiapp.com/',
    linkToProjectSource: 'https://github.com/devMunyi/zidi-app',
  },
  {
    name: 'Morning Dew',
    tag: ['Freelancer', 'Software Developer', 2021],
    description:
      'An online platform that allows visitors to book rooms and is integrated with the stripe payment gateway. Implements authentication and authorization of users.',
    featured_img: 'img/morning-dew/index.png',
    tech: ['ReactJs', 'NodeJs', 'MongoDB', 'Bootstrap'],
    linkToLiveProject: 'https://main--dancing-taiyaki-c4c009.netlify.app/',
    linkToProjectSource: 'https://github.com/devMunyi/morning-dew-frontend',
  },

  {
    name: 'POS',
    tag: ['Freelancer', 'Software Developer', 2021],
    description:
      'An online store admin panel that can be used to manage shop sales. Makes it possible to manages both Cash and Credit sales. Includes an admin dashboard and regular user dashboard.',
    featured_img: 'img/POS/index.png',
    tech: ['Vanilla JavaScript', 'JQuery', 'PHP', 'MySQL'],
    linkToLiveProject: 'https://apa-shop.herokuapp.com/dashboard',
    linkToProjectSource: 'https://github.com/devMunyi/POS',
  },
  {
    name: 'Todo List',
    tag: ['Microverse', 'Student', 2022],
    description:
      'A tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    featured_img: 'img/todo-list/index.png',
    tech: ['JavaScript', 'HTML', 'CSS', 'Webpack'],
    linkToLiveProject: 'https://devmunyi.github.io/todo-list/',
    linkToProjectSource: 'https://github.com/devMunyi/todo-list',
  },
];

const displayProjectsOnUI = () => {
  // let h2 = document.createElement('h2');
  // h2.innerText = 'Projects';
  // h2.classList.add('projects-h2');
  const displayPlaceholder = document.getElementById('projects_area');
  const uiDisplay = projects
    .map(
      (project, index) => `<div class="grid-item grid-item1">
      <div class="flex-sect flex-sect1 project_img">
        <img src="${project.featured_img}" alt="Project on ${project.name}" />
      </div>
      <div class="flex-sect flex-sect2">
        <h2 class="project-title mlr-16">${project.name}</h2>
        <ul class="ptags">
          <li class="ptag ptag1">${project.tag[0]}</li>
          <li class="ptag ptag2"></li>
          <li class="ptag ptag3">${project.tag[1]}</li>
          <li class="ptag ptag4"></li>
          <li class="ptag ptag5">${project.tag[2]}</li>
        </ul>
        <p class="description p-description mlr-16">
          ${project.description}
        </p>
        <ul class="works-categories">
          <li class="wcat wcat1">${project?.tech[0]}</li>
          <li class="wcat wcat1">${project?.tech[1]}</li>
          <li class="wcat wcat1">${project?.tech[2]}</li>
          <li class="wcat wcat1">${project?.tech[3]}</li>
        </ul>
        <br />
        <button
          onclick="seeProjectDetails(${index})"
          id="myBtn"
          type="submit"
          class="btn project-view-btn cursor-pointer"
        >
          See Project
        </button>
      </div>
    </div>`,
    )
    .join('');

  displayPlaceholder.innerHTML = uiDisplay;
};

document.addEventListener('DOMContentLoaded', displayProjectsOnUI);

// get the project name

const projectName = document.getElementById('project-name');
const projectDescription = document.getElementById('project-desc');
const projectImage = document.getElementById('project-img');
const projectLiveLink = document.getElementById('live_url');
const projectSourceLink = document.getElementById('source_url');
const tagOne = document.getElementById('tag-1');
const tagTwo = document.getElementById('tag-2');
const tagThree = document.getElementById('tag-3');

/* eslint-disable no-unused-vars */
function seeProjectDetails(projectIndex) {
  const worksCat = document.querySelector('#works-categories');
  const project = projects[projectIndex];
  projectName.textContent = project.name;
  const [firstTag, secondTag, thirdTag] = project.tag;
  tagOne.textContent = firstTag;
  tagTwo.textContent = secondTag;
  tagThree.textContent = thirdTag;
  projectImage.src = project.featured_img;
  projectDescription.textContent = project.description;
  const techsCat = project.tech;
  const techsCatUI = techsCat
    .map(
      (item, techIndex) => `
    <li class="wcat wcat${techIndex + 1}" id="tech-${techIndex + 1
}">${item}</li>
    `,
    )
    .join('');

  worksCat.innerHTML = techsCatUI;

  // techOne.textContent = firstTech;
  // techTwo.textContent = secondTech;
  // techThree.textContent = thirdTech;
  projectLiveLink.setAttribute('href', project.linkToLiveProject);
  projectLiveLink.setAttribute('target', '_blank');
  projectSourceLink.setAttribute('href', project.linkToProjectSource);
  projectSourceLink.setAttribute('target', '_blank');

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

// Select all the outer list elements
const outerLists = document.querySelectorAll('#about .outer-list');

if (outerLists.length) {
  // Add event listener to each outer list
  outerLists.forEach((outerList) => {
    outerList.addEventListener('click', () => {
      // Check if the clicked outer list has the class "active-list"
      const isActive = outerList.classList.contains('active-list');

      // Hide all the nested lists and remove the "active-list" class from all outer lists
      outerLists.forEach((list) => {
        const arrowIcon = list.querySelector('img');
        arrowIcon.setAttribute('src', './img/forward_arrow.svg');

        list.classList.remove('active-list');
        list.querySelector('.abt-cat-inner').style.display = 'none';
      });

      // If the clicked outer list is not active,
      // show its nested list and add the "active-list" class
      if (!isActive) {
        const arrowIcon = outerList.querySelector('img');
        arrowIcon.setAttribute('src', './img/down_arrow.svg');

        outerList.classList.add('active-list');
        outerList.querySelector('.abt-cat-inner').style.display = 'flex';
        outerList.querySelector('.abt-cat-inner').style.flexDirection = 'row';
        outerList.querySelector('.abt-cat-inner').style.gap = '0.75rem';
        outerList.querySelector('.abt-cat-inner').style.flexWrap = 'wrap';
        outerList.querySelector('.abt-cat-inner').style.overflowX = 'auto';
        outerList.querySelector('.abt-cat-inner').style.maxWidth = '100%';
      }
    });
  });
}

const listItems = document.querySelectorAll('.desktop-nav .nav-flex-item');

if (listItems.length) {
  listItems.forEach((item) => {
    item.addEventListener('click', () => {
      // remove 'click-effect' class from all list items
      listItems.forEach((li) => li.classList.remove('click-effect'));
      // toggle 'click-effect' class on the clicked item
      item.classList.toggle('click-effect');
    });
  });
}