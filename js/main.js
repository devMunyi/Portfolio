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
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
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

function seeProjectDetails(projectIndex) {
  const project = projects[projectIndex];
  projectName.textContent = project.name;
  tagOne.textContent = project.tag[0];
  tagTwo.textContent = project.tag[1];
  tagThree.textContent = project.tag[2];
  projectImage.src = project.featured_img;
  projectDescription.textContent = project.description;
  techOne.textContent = project.tech[0];
  techTwo.textContent = project.tech[1];
  techThree.textContent = project.tech[2];
  projectLiveLink.href = project.linkToLiveProject;
  projectSourceLink.href = project.linkToProjectSource;

  // display modal
  modal.style.display = 'block';
}
