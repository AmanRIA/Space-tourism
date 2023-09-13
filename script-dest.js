
document.getElementById('Moon').addEventListener('click', loadDestinationData);
document.getElementById('Mars').addEventListener('click', loadDestinationData);
document.getElementById('Europa').addEventListener('click', loadDestinationData);
document.getElementById('Titan').addEventListener('click', loadDestinationData);


function loadDestinationData(event) {
    
    event.preventDefault();

    
    const destinationId = event.target.id;
    // console.log(destinationId);

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
