function skillsMember() {
  const skills = document.querySelectorAll(".skill");
  const progressBar = document.querySelectorAll(".progress-bar");
  const skillText = document.querySelectorAll(".skill-text");

  skills.forEach((skill, index) => {
    skill.style.width = `${skill.dataset.percent}%`;
    progressBar[index].style.width = `${skill.dataset.percent}%`;
    skillText[index].innerHTML = `${skill.dataset.percent}%`;
  });
}