var showskills = document.getElementById("show-skills");
var hideSkills = document.getElementById("hide-skills");
var mySkills = document.getElementById("my-skills");
showskills === null || showskills === void 0 ? void 0 : showskills.addEventListener("click", function () {
    mySkills.style.display = "block";
});
hideSkills === null || hideSkills === void 0 ? void 0 : hideSkills.addEventListener("click", function () {
    mySkills.style.display = "none";
});
var showProject1 = document.getElementById("show-pr1");
var showProject2 = document.getElementById("show-pr2");
var project1_desc = document.getElementById("pr1-desc");
var project2_desc = document.getElementById("pr2-desc");
showProject1.addEventListener("click", function () {
    project1_desc.style.display = "block";
});
showProject2.addEventListener("click", function () {
    project2_desc.style.display = "block";
});
