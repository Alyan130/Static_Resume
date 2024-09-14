const showskills=document.getElementById("show-skills") as HTMLButtonElement;
const hideSkills=document.getElementById("hide-skills") as HTMLButtonElement;
const mySkills=document.getElementById("my-skills") as HTMLElement;

showskills?.addEventListener("click",()=>{
mySkills.style.display="block";
});

hideSkills?.addEventListener("click",()=>{
  mySkills.style.display="none";
});

const showProject1=document.getElementById("show-pr1") as HTMLButtonElement;
const showProject2=document.getElementById("show-pr2") as HTMLButtonElement;
const project1_desc=document.getElementById("pr1-desc")as HTMLParagraphElement ;
const project2_desc=document.getElementById("pr2-desc") as HTMLParagraphElement;

showProject1.addEventListener("click",()=>{
  project1_desc.style.display="block";
});

showProject2.addEventListener("click",()=>{
  project2_desc.style.display="block";
})