// Add WhatsApp click handler
document
  .querySelector(".whatsapp-button")
  .addEventListener("click", function (e) {
    // The href attribute already handles the redirect
    // This is just for any additional functionality you might want to add
    console.log("WhatsApp button clicked");
  });

function scrollToContact(e) {
  e.preventDefault();
  const contactSection = document.getElementById("contact-us");
  contactSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.addEventListener("scroll", function () {
  const button = document.querySelector(".whatsapp-btn");
  if (window.scrollY > 300) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
});
