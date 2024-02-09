$(document).ready(function () {
  $("#createUserBtn").click(function () {
    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let password = $("#password").val();

    if (name === "") {
      let userFullNameError = document.getElementById("userFullNameError");
      userFullNameError.textContent = "Full Name Required";
      userFullNameError.style.color = "balck";
      userFullNameError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (name.length <= 1) {
      let userFirstNameError = document.getElementById("userFullNameError");
      userFirstNameError.textContent = "Input atlaest two characters";
      userFirstNameError.style.color = "black";
      userFirstNameError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    } else if (!isNaN(name)) {
      let userFullNameError = document.getElementById("userFullNameError");
      userFullNameError.textContent =
        "Number is not appropriate for this field";
      userFullNameError.style.color = "black";
      userFullNameError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    } else {
      let userFullNameError = document.getElementById("userFullNameError");
      userFullNameError.textContent = "";
      error = false;
    }

    if (phone == "") {
      let userPhoneError = document.getElementById("userPhoneError");
      userPhoneError.textContent = "Telephone feild can not be empty";
      userPhoneError.style.color = "black";
      userPhoneError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (phone.length < 7 || phone.length > 15) {
      let userPhoneError = document.getElementById("userPhoneError");
      userPhoneError.textContent = "Invalid length";
      userPhoneError.style.color = "black";
      userPhoneError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    } else if (isNaN(phone)) {
      let userPhoneError = document.getElementById("userPhoneError");
      userPhoneError.textContent = " Numbers alone are allowed";
      userPhoneError.style.color = "black";
      userPhoneError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    } else {
      let userPhoneError = document.getElementById("userPhoneError");
      userPhoneError.textContent = "";
      error = false;
    }

    if (email == "") {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "Email can not be blank";
      userEmailError.style.color = "black";
      userEmailError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (email.indexOf(" ") !== -1) {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "A valid email does not contain space";
      userEmailError.style.color = "black";
      userEmailError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (email.indexOf("@") == -1) {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "@ symbol required";
      userEmailError.style.color = "black";
      userEmailError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (email.indexOf("@") <= 0) {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "Invalid position of @ symbol";
      userEmailError.style.color = "black";
      userEmailError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (email.indexOf(".") <= -1) {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "Invalid email format";
      userEmailError.style.color = "black";
      userEmailError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (email.indexOf(".") <= 0) {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "Invalid email format";
      userEmailError.style.color = "black";
      userEmailError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    } else if (
      email.indexOf(".") - email.indexOf("@") < 2 ||
      email.indexOf(".") > email.length - 3
    ) {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "Invalid email format";
      userEmailError.style.color = "black";
      userEmailError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    } else {
      let userEmailError = document.getElementById("userEmailError");
      userEmailError.textContent = "";
      error = false;
    }
    if (password === "") {
      let passwordError = document.getElementById("passwordError");
      passwordError.textContent = "password Required";
      passwordError.style.color = "balck";
      passwordError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    }
    if (password.length <= 8) {
      let passwordError = document.getElementById("passwordError");
      passwordError.textContent = "Input atlaest eight characters";
      passwordError.style.color = "black";
      passwordError.style.border = "1px solid #f1ebe7";
      error = true;
      return false;
    } else {
      let passwordError = document.getElementById("passwordError");
      passwordError.textContent = "";
      error = false;
    }

    let userDetails = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    $.ajax({
      url: "http://159.65.21.42:9000/register",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(userDetails),
      success: function (response) {
        console.log("User registration successful:", response);
        alert("User registration successful!");
      },
      error: function (error) {
        console.log("Registration error:", error);
        alert("Registration Error.");
      },
    });
    $("form")[0].reset();
  });

  $("#removeProduct").on("click", function (event) {
    event.preventDefault();
    var iDoFproductToBeRemove = "657b32a23b88d36925ae0b99";
    $.ajax({
      url: "http://159.65.21.42:9000/product" + iDoFproductToBeRemove,
      type: "DELETE",
      success: function (response) {
        console.log(response);
        alert("Product deleted successfully");
      },
      error: function (error) {
        console.log(error);
        alert("Error deleting product");
      },
    });
  });

