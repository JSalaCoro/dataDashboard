
const ctx1 = document.getElementById('incomeChart');

fetch('landings_byPort_2023.json')

.then(function(response){
    if(response.ok == true){
        return response.json();
    }
})

.then(function(data){
    console.log(data)
    console.log(typeof(data))
    console.log(data.landings.map(row => row.PortName))
    createIncomeChart(data, 'bar');
})


function createIncomeChart(data, type){
    new Chart(ctx1, {
        type: type,
        data: {
            labels: data.landings.map(row => row.PortName),
            datasets: [{
                data: data.landings.map(row => row.Eu),
                borderWidth: 1
            }]
        },
        options: {
            plugins:{
                legend:{display:false}
            },
            scales: {
            y: {
                title: {display:true, text: 'Income (€)'},
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