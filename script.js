"use strict";

const btn = document.querySelector("button");
const all = document.querySelector(".all");

const colors = [
  "red",
  "blue",
  "green",
  "tan",
  "coral",
  "darkgrey",
  "darksalmon",
  "goldenrod",
  "mediumslateblue",
  "royalblue",
  "burlywood",
  "aqua",
];

btn.addEventListener("click", function () {
  const random = Math.trunc(Math.random() * colors.length);
  all.style.backgroundColor = colors[random];
});
