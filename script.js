// hide the social icons when the scroll height is 0
window.onscroll = function () {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop < 500) {
    document.querySelector(".social-links").style.opacity = "0";
  } else {
    document.querySelector(".social-links").style.opacity = "1";
  }
};
