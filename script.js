// Placeholder for future interactive features
console.log("Website loaded successfully!");
document.addEventListener('DOMContentLoaded', () => {
  // Handle dropdown menu
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });

  // Handle user icon dashboard
  const userIcon = document.querySelector('.user-icon');
  const userDashboard = document.querySelector('.user-dashboard');

  userIcon.addEventListener('click', () => {
    userDashboard.classList.toggle('show');
  });

  // Close the dashboard if clicked outside
  document.addEventListener('click', (e) => {
    if (!userIcon.contains(e.target) && !userDashboard.contains(e.target)) {
      userDashboard.classList.remove('show');
    }
  });
});
