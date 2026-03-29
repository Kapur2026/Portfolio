document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".contact-form"); // 🔥 class use

  if (!form) {
    console.error("Form not found ❌");
    return;
  }

  emailjs.init("hOQq4mxQ0DleSnTgu");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_b0lhnvn", "template_wu8pwer", form)
      .then(() => {
        alert("✅ Message Sent");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("❌ Failed");
      });
  });

});