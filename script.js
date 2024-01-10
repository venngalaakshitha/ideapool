function showHeaderAndButtons() {
  document.getElementById('header').style.display = 'block';
  document.getElementById('navButtons').style.display = 'flex';
  document.getElementById('loginSignupContainer').style.display = 'none';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {
    hideLoginForm();
    showHomePage();
    showHeaderAndButtons();
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

function signup() {
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const signupPassword = document.getElementById('signupPassword').value;

  if (email && mobile && signupPassword) {
    hideSignupForm();
    showHomePage();
    showHeaderAndButtons();
  } else {
    alert('Please fill in all the signup fields.');
  }
}

function hideLoginForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.querySelector('.container').style.display = 'none';
}

function hideSignupForm() {
  document.getElementById('signupForm').style.display = 'none';
  document.querySelector('.container').style.display = 'none';
}

function hideAllSections() {
  const sections = document.querySelectorAll('.form-container, .main-container');
  sections.forEach(section => {
    section.style.display = 'none';
  });
}

function showHomePage() {
  hideAllSections();
  document.getElementById('mainPage').style.display = 'block';
}

function showLogin() {
  hideAllSections();
  document.getElementById('loginForm').style.display = 'block';
}

function showSignup() {
  hideAllSections();
  document.getElementById('signupForm').style.display = 'block';
}

function showProfile() {
  hideAllSections();
  document.getElementById('profilePage').style.display = 'block';
}

function showContactUs() {
  hideAllSections();
  document.getElementById('contactUsPage').style.display = 'block';
}

function saveProfile() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const verifiedEmail = document.getElementById('verifiedEmail').value;
  const verifiedMobile = document.getElementById('verifiedMobile').value;
  const organization = document.getElementById('organization').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const userType = document.getElementById('userType').value;
  const resume = document.getElementById('resume').value;
  const skills = document.getElementById('skills').value;
  const projects = document.getElementById('projects').value;
  const socialLinks = document.getElementById('socialLinks').value;

  // Here, you can save this information to a database or perform further actions

  // For now, let's log the information to the console
  console.log({
    firstName,
    lastName,
    dob,
    gender,
    verifiedEmail,
    verifiedMobile,
    organization,
    city,
    country,
    userType,
    resume,
    skills,
    projects,
    socialLinks
  });

  // Code to save profile information
  // Retrieve form values and perform necessary actions
}
