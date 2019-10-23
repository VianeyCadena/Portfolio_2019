/* function floatPercent(value){
    return "% "+(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            return floatPercent(value);
                        }
                    }
                }]
            }
        }
    });
}

$("#renderBtn").click(
    function () {
        data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart(data, labels);
    }
); */

$(document).ready(function(){
    data = [80, 80, 60, 70, 60, 50, 80, 75, 65, 60, 50, 55, 60, 55, 70, 65, 100];
    labels = ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro", "Audition", "HTML", "CSS", "Bootstrap", "JS", "jQuery", "ReactJS", "NodeJS", "Express", "MySQL", "Firebase"];
    renderChart(data,labels);
});

function floatPercent(value){
    return (value).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "% ";
}


function renderChart(data, labels){
    var ctx = document.getElementById('myChart').getContext('2d');

    var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 400);
        purple_orange_gradient.addColorStop(0, '#7c00ff');
        purple_orange_gradient.addColorStop(1, '#00f9ff');

    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: "What I Know",
            data: data,
            backgroundColor: purple_orange_gradient,
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return floatPercent(value);
                    }
                }
            }]
        }
    }

});
}


