let ctx = document.getElementById("myChart--pie");
console.log(ctx);

var data = {
    labels: [
        "Attending wedding",
        "Not attending wedding",
        "TBC"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
});

// PIE CHART

ctx = document.getElementById("myChart--polar").getContext('2d');
console.log(ctx);

var data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
            // Need two more colours
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "None",
        "Vegetarian (fish ok)",
        "Vegetarian (fish not ok)",
        "Gluten-free",
        "Kid's meal"
        // Need two more categories
    ]
};

var myPolarChart = new Chart(ctx, {
    data: data,
    type: 'polarArea',
});


//POLAR CHART

ctx = document.getElementById("myChart--radar").getContext('2d');
console.log(ctx);

var data = {
    labels: ["Family", "School", "University", "Work", "+1","Friends of parents", "Some random bar"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
});

// RADAR CHART

