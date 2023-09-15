
document.getElementById('Moon').addEventListener('click', loadDestinationData);
document.getElementById('Mars').addEventListener('click', loadDestinationData);
document.getElementById('Europa').addEventListener('click', loadDestinationData);
document.getElementById('Titan').addEventListener('click', loadDestinationData);
const destinationNavItem = document.querySelector('#dest-nav-item');
const itemList=document.querySelectorAll('.content-nav-link');
if (document.body.classList.contains('bodyDest')) {
  destinationNavItem.classList.add('active');
} else {
  destinationNavItem.classList.remove('active');
}





function loadDestinationData(event) {
    
    event.preventDefault();
    console.log(itemList);
    
    const destinationId = event.target.id;
    
    
    itemList.forEach(item=>{
      if(item.getAttribute('id')===destinationId){
        item.classList.add('active');
      }else{
        item.classList.remove('active');
      }
    })
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            
            const selectedDestination = data.destinations.find(destination => destination.name === destinationId);

            
            document.querySelector('.head.head-1').textContent = selectedDestination.name;
            document.querySelector('.typography').textContent = selectedDestination.description;
            document.querySelector('.statval1').textContent = selectedDestination.distance;
            document.querySelector('.statval2').textContent = selectedDestination.travel;
            const destinationImage = document.getElementById('dest-img');
            console.log(destinationImage);
            destinationImage.src = selectedDestination.images.png;
        })
        .catch(error => console.error('Error fetching data:', error));
}

const destinationItems = document.querySelectorAll('.content-nav-link');

destinationItems.forEach(item => {
  if (item.classList.contains('active2')) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});




