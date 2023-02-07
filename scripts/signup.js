document.getElementById('birthdate').value = moment().format('MM/DD/YYY');


// validation for ensure questions are chosen and an answer is entered
$(document).ready(function() {
    $("#signupForm").validate({
      rules: {
        securityQuestion: {
          required: true
        },
        securityAnswer: {
          required: true,
          minlength: 3
        }
      },
      messages: {
        securityQuestion: {
          required: "Please select a security question"
        },
        securityAnswer: {
          required: "Please provide an answer",
          minlength: "Your answer must be at least 3 characters long"
        }
      }
    });
  });