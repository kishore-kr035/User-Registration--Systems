function submitData() {
  alert("Button clicked");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;

  fetch("http://localhost:5000/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, phone, age })
  })
  .then(response => response.text())   // ✅ FIX
  .then(data => {
    console.log("Server says:", data);
    alert(data);
  })
  .catch(err => {
    console.log("Error:", err);
    alert("Something went wrong");
  });
}