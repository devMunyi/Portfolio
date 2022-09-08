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
    name: 'Tonic',
    tag: ['CANOPY', 'Back End Dev', 2015],
    description:
      'A daily selection of privately personalized reads; no account or sign-ups required',
    featured_img: 'img/project1_desktop_bg.png',
    tech: ['html', 'css', 'javascript'],
    linkToLiveProject: 'https://devmunyi.github.io/Portfolio/',
    linkToProjectSource: 'https://github.com/devMunyi/Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    tag: ['FACEBOOK', 'Full Stack Dev', 2015],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featured_img: 'img/project2.png',
    tech: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkToLiveProject: 'https://devmunyi.github.io/Portfolio/',
    linkToProjectSource: 'https://github.com/devMunyi/Portfolio',
  },

  {
    name: 'Facebook 360',
    tag: ['FACEBOOK', 'Full Stack Dev', 2015],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featured_img: 'img/project3.png',
    tech: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkToLiveProject: 'https://devmunyi.github.io/Portfolio/',
    linkToProjectSource: 'https://github.com/devMunyi/Portfolio',
  },
  {
    name: 'Uber Navigation',
    tag: ['Uber', 'Lead Developer', 2018],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featured_img: 'img/project4.png',
    tech: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkToLiveProject: 'https://devmunyi.github.io/Portfolio/',
    linkToProjectSource: 'https://github.com/devMunyi/Portfolio',
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
  const [firstTech, secondTech, thirdTech] = project.tect;
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
