// Add event listeners to the navigation links
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav ul li a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", navigate);
    }
  });
  
  // Navigation function
  function navigate(event) {
    event.preventDefault(); // Prevent the default link behavior
  
    var target = event.target;
    var tabId = target.getAttribute("data-tab");
  
    // Update the active class on the clicked link
    var currentActive = document.querySelector(".active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    target.classList.add("active");
  
    // Show the corresponding tab content
    var tabContent = document.querySelectorAll(".tab-content");
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";
  }
  