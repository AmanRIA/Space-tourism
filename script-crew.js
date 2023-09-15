document.getElementById('Douglas Hurley').addEventListener('click', loadCrewData);
document.getElementById('Anousheh Ansari').addEventListener('click', loadCrewData);
document.getElementById('Mark Shuttleworth').addEventListener('click', loadCrewData);
document.getElementById('Victor Glover').addEventListener('click', loadCrewData);
const destinationNavItem = document.querySelector('#crew-nav-item');
const itemList=document.querySelectorAll('.dots');

if (document.body.classList.contains('bodyCrew')) {
  destinationNavItem.classList.add('active');
} else {
  destinationNavItem.classList.remove('active');
}

function loadCrewData(event) {
    
    event.preventDefault();

    
    const CrewId = event.target.id;
    // console.log(destinationId);
    itemList.forEach(item=>{
      if(item.getAttribute('id')===CrewId){
        item.classList.add('selected-dot');
      }else{
        item.classList.remove('selected-dot');
      }
    })

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            
            const selectedCrew = data.crew.find(crew => crew.name === CrewId);

            document.querySelector('#role').textContent = selectedCrew.role;
            document.querySelector('.head.head-4').textContent = selectedCrew.name;
            document.querySelector('.typography').textContent = selectedCrew.bio;
            const crewImage = document.getElementById('crew-img');
            // console.log(destinationImage);
            crewImage.src = selectedCrew.images.png;
        })
        .catch(error => console.error('Error fetching data:', error));
}