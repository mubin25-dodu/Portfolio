document.addEventListener('DOMContentLoaded', function() {
  const dropdownButton = document.querySelector('#dropdown button');
  const dropdownContent = document.querySelector('#dropdown-content');

  dropdownButton.addEventListener('click', function() {
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
});

document.addEventListener('scroll', function() {
  const nav3 = document.getElementById('nav3');
  if (window.scrollY > 100) {
    nav3.style.top = '-60px';
  } else {
    nav3.style.top = '50px';
  }
});
