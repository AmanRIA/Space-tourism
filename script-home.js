const destinationNavItem = document.querySelector('#home-nav-item');

if (document.body.classList.contains('bodyHome')) {
  destinationNavItem.classList.add('active');
} else {
  destinationNavItem.classList.remove('active');
}
