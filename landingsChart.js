
const ctx2 = document.getElementById('landingsChart');

fetch('landings_byPort_2023.json')

.then(function(response){
    if(response.ok == true){
        return response.json();
    }
})

.then(function(data){
    createLandingsChart(data, 'bar');
})


function createLandingsChart(data, type){
    new Chart(ctx2, {
        type: type,
        data: {
            labels: data.landings.map(row => row.PortName),
            datasets: [{
                data: data.landings.map(row => row.Kg),
                borderWidth: 1
            }]
        },
        options: {
            plugins:{
                legend:{display:false}
            },
            scales: {
            y: {
                title: {display:true, text: 'Landings (Kg)'},
                beginAtZero: true
            },
            x: {
                title: {display:true, text: 'Port'},
                beginAtZero: true
            }
            }
        }
    });
}