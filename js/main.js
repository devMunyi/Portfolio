let humbergerToggle = document.querySelector(".mobile-nav");
let links = document.querySelectorAll(".desktop-nav .link");

humbergerToggle.addEventListener("click", function () {
  document.body.classList.toggle("change-mobile-nav");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("change-mobile-nav");
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const projects = [
  {
    name: "Tonic",
    tag: {
      1: "CANOPY",
      2: "Back End Dev",
      3: "2015",
    },
    description:
      "A daily selection of privately personalized reads; no account or sign-ups required",
    featured_img: "img/project1_desktop_bg.png",
    tech: {
      1: "html",
      2: "css",
      3: "javascript",
    },
    linkToLiveProject: "https://devmunyi.github.io/Portfolio/",
    linkToProjectSource: "https://github.com/devMunyi/Portfolio",
  },
  {
    name: "Multi-Post Stories",
    tag: {
      1: "FACEBOOK",
      2: "Full Stack Dev",
      3: "2015",
    },
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    featured_img: "img/project2.png",
    tech: {
      1: "html",
      2: "Ruby on rails",
      3: "css",
      4: "javascript",
    },
    linkToLiveProject: "https://devmunyi.github.io/Portfolio/",
    linkToProjectSource: "https://github.com/devMunyi/Portfolio",
  },

  {
    name: "Facebook 360",
    tag: {
      1: "FACEBOOK",
      2: "Full Stack Dev",
      3: "2015",
    },
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featured_img: "img/project3.png",
    tech: {
      1: "html",
      2: "Ruby on rails",
      3: "css",
      4: "javascript",
    },
    linkToLiveProject: "https://devmunyi.github.io/Portfolio/",
    linkToProjectSource: "https://github.com/devMunyi/Portfolio",
  },
  {
    name: "Uber Navigation",
    tag: {
      1: "Uber",
      2: "Lead Developer",
      3: "2018",
    },
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    featured_img: "img/project4.png",
    tech: {
      1: "html",
      2: "Ruby on rails",
      3: "css",
      4: "javascript",
    },
    linkToLiveProject: "https://devmunyi.github.io/Portfolio/",
    linkToProjectSource: "https://github.com/devMunyi/Portfolio",
  },
];

//get the project name
let projectName = document.getElementById("project-name");
let projectDescription = document.getElementById("project-desc");
let projectImage = document.getElementById("project-img");
let projectLiveLink = document.getElementById("live_url");
let projectSourceLink = document.getElementById("source_url");
let techOne = document.getElementById("tech-1");
let techTwo = document.getElementById("tech-2");
let techThree = document.getElementById("tech-3");
let tagOne = document.getElementById("tag-1");
let tagTwo = document.getElementById("tag-2");
let tagThree = document.getElementById("tag-3");

// let currentIndex = 0;
// window.addEventListener("DOMContentLoaded", function () {
//   //populate first project details into the modal
//   seeProjectDetails(currentIndex);
// });

function seeProjectDetails(projectIndex) {
  const project = projects[projectIndex];
  projectName.textContent = project.name;
  tagOne.textContent = project.tag[1];
  tagTwo.textContent = project.tag[2];
  tagThree.textContent = project.tag[3];
  projectImage.src = project.featured_img;
  projectDescription.textContent = project.description;
  techOne.textContent = project.tech[1];
  techTwo.textContent = project.tech[2];
  techThree.textContent = project.tech[3];
  projectLiveLink.href = project.linkToLiveProject;
  projectSourceLink.href = project.linkToProjectSource;
  //display modal
  modal.style.display = "block";
}
