document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Contact form submitted!")
  })

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault()
  alert("Login form submitted!")
})

document
  .getElementById("payment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Payment processed successfully!")
  })
