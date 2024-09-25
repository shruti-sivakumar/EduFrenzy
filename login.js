// Toggle between Login and Sign-Up Forms
document.getElementById('toggle-signup').addEventListener('click', () => {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('signup-form').classList.remove('hidden');
  document.getElementById('form-title').innerText = 'Sign Up';
});

document.getElementById('toggle-login').addEventListener('click', () => {
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('form-title').innerText = 'Login';
});

// Password visibility toggle
function togglePassword(id) {
  const passwordInput = document.getElementById(id);
  const eyeIcon = passwordInput.nextElementSibling.querySelector('i');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
  } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
  }
}

// Real-time password validation
const passwordSignup = document.getElementById('password-signup');
const confirmPassword = document.getElementById('confirm-password');
const passwordMatchFeedback = document.getElementById('password-match');

confirmPassword.addEventListener('input', () => {
  if (passwordSignup.value === confirmPassword.value) {
      passwordMatchFeedback.innerText = 'Passwords match';
      passwordMatchFeedback.style.color = 'green';
  } else {
      passwordMatchFeedback.innerText = 'Passwords do not match';
      passwordMatchFeedback.style.color = 'red';
  }
});

// Password strength feedback (example)
passwordSignup.addEventListener('input', () => {
  const passwordStrength = document.getElementById('password-strength');
  const passwordValue = passwordSignup.value;

  if (passwordValue.length < 6) {
      passwordStrength.innerText = 'Weak password';
      passwordStrength.style.color = 'red';
  } else if (passwordValue.length < 10) {
      passwordStrength.innerText = 'Moderate password';
      passwordStrength.style.color = 'orange';
  } else {
      passwordStrength.innerText = 'Strong password';
      passwordStrength.style.color = 'green';
  }
});
