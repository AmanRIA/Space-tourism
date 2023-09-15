document.getElementById('Launch vehicle').addEventListener('click', loadTechData);
document.getElementById('Spaceport').addEventListener('click', loadTechData);
document.getElementById('Space capsule').addEventListener('click', loadTechData);
const destinationNavItem = document.querySelector('#tech-nav-item');
const itemList=document.querySelectorAll('.dots');
if (document.body.classList.contains('bodyTech')) {
  destinationNavItem.classList.add('active');
} else {
  destinationNavItem.classList.remove('active');
}


function loadTechData(event) {
    
    event.preventDefault();

    
    const techId = event.target.id;
    // console.log(techId);
    itemList.forEach(item=>{
      if(item.getAttribute('id')===techId){
        item.classList.add('selected-dot');
      }else{
        item.classList.remove('selected-dot');
      }
    })


    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            
            const selectedTech = data.technology.find(technology => technology.name === techId);
            console.log(selectedTech);

            
            document.querySelector('.head.head-4').textContent = selectedTech.name;
            document.querySelector('.typography').textContent = selectedTech.description;
            const techImage = document.getElementById('Tech-img');
            // console.log(destinationImage);
            techImage.src = selectedTech.images.portrait;
        })
        .catch(error => console.error('Error fetching data:', error));
}