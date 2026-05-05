let collectData = [];

function collectMsg(e) {
  e.preventDefault(); // ✅ correct way

  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let msg = document.getElementById("message").value.trim();

  // Clear old errors
  document.getElementById("errorfullname").innerHTML = "";
  document.getElementById("erroremail").innerHTML = "";
  document.getElementById("errorsubject").innerHTML = "";
  document.getElementById("errormessage").innerHTML = "";

  let isValid = true;

  // Validation
  if (!fullname) {
    document.getElementById("errorfullname").innerHTML = "Required";
    isValid = false;
  }

  if (!email) {
    document.getElementById("erroremail").innerHTML = "Required";
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("erroremail").innerHTML = "Invalid Email";
    isValid = false;
  }

  if (!subject) {
    document.getElementById("errorsubject").innerHTML = "Required";
    isValid = false;
  }

  if (!msg) {
    document.getElementById("errormessage").innerHTML = "Required";
    isValid = false;
  }

  if (!isValid) return;

  let data = {
    name: fullname,
    mail: email,
    sub: subject,
    text: msg
  };

  collectData.push(data);

  // ✅ Console output
  console.log("✅ Submitted Data:");
  console.log(collectData);

  // Clear form
  document.querySelector("form").reset();
}

// Email validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}