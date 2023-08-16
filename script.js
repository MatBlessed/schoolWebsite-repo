// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("navbar").style.borderRadius = "0px 0px 5px 5px";
    document.getElementById("logo").style.width = "4%";
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("navbar").style.borderRadius = "0px";
    document.getElementById("logo").style.width = "8%";
  }
}