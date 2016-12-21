// PRE-WEDDING ATTENDANCE - PIE

const pattendanceDiv = document.getElementById("preweddingAttendance");
// 

const pattendanceData = {
    labels: [
        "Attending rehearsal dinner",
        "Not attending rehearsal dinner"
    ],
    datasets: [
        {
            data: [200, 90],
            backgroundColor: [
                "#202e50",
                "#364f88"
            ],
            hoverBackgroundColor: [
                "#202e50",
                "#364f88"
            ]
        }]
};

const preweddingAttendanceChart = new Chart(pattendanceDiv,{
    type: 'pie',
    data: pattendanceData,
});


// WEDDING ATTENDANCE - PIE

const attendanceDiv = document.getElementById("weddingAttendance");
// 

const attendanceData = {
    labels: [
        "Attending wedding",
        "Not attending wedding"
    ],
    datasets: [
        {
            data: [150, 20],
            backgroundColor: [
                "#AB987A",
                "#FF533D"
            ],
            hoverBackgroundColor: [
                "#AB987A",
                "#FF533D"
            ]
        }]
};

const weddingAttendanceChart = new Chart(attendanceDiv,{
    type: 'pie',
    data: attendanceData,
});


// DIETARY REQUIREMENTS - POLAR

const dietaryDiv = document.getElementById("dietaryChart");
// 

const dietaryData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14,
            9,
            6
        ],
        backgroundColor: [
            "#FF533D",
            "#2b3f6c",
            "#7c94cb",
            "#b8babd",
            "#FFCE56",
            "#ff978a",
            "#AB987A"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "None", 
        "Vegetarian (fish ok)", 
        "Vegetarian (fish not ok)", 
        "Gluten-free", 
        "Kid's meal", 
        "Baby bowl", 
        "Other"
    ]
};

new Chart(dietaryDiv, {
    data: dietaryData,
    type: 'polarArea',

});

// DIETARY REQUIREMENTS - POLAR

const relDiv = document.getElementById("relBar");

const relData = {
    labels: ["Family", "School", "University", "Work", "+1", "Friends of parents", "Some random bar"],
    datasets: [
        {
            label: "Types of relationships",
            backgroundColor: [
                '#FF533D',
                '#b8babd',
                '#7c94cb',
                '#FFCE56',
                '#2b3f6c',
                '#AB987A',
                '#ff978a'

            ],
            borderColor: [
                '#FF533D',
                '#b8babd',
                '#7c94cb',
                '#FFCE56',
                '#2b3f6c',
                '#AB987A',
                '#ff978a'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 1],
        }
    ]
};

const myBarChart = new Chart(relDiv, {
    type: 'bar',
    data: relData,
});


// RELATIONSHIPS - BAR

// const partyDiv = document.getElementById("partyRadar");

// const partyData = {
//     labels: ["Family", "School", "University", "Work", "+1", "Friends of parents", "Some random bar"],
//     datasets: [
//         {
//             label: "My First dataset",
//             backgroundColor: "rgba(179,181,198,0.2)",
//             borderColor: "rgba(179,181,198,1)",
//             pointBackgroundColor: "rgba(179,181,198,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(179,181,198,1)",
//             data: [65, 59]
//         },
//         {
//             label: "My Second dataset",
//             backgroundColor: "rgba(255,99,132,0.2)",
//             borderColor: "rgba(255,99,132,1)",
//             pointBackgroundColor: "rgba(255,99,132,1)",
//             pointBorderColor: "#fff",
//             pointHoverBackgroundColor: "#fff",
//             pointHoverBorderColor: "rgba(255,99,132,1)",
//             data: [28, 48]
//         }
//     ]
// };

// const myPartyRadar = new Chart(partyDiv, {
//     type: 'radar',
//     data: partyData,
// });

// // PARTY - RADAR

const countryDiv = document.getElementById("countryLine");

const countryData = {
    labels: ["USA", "Canada", "United Kingdom (aka London)", "India", "Singapore", "Armenia", "Japan"],
    datasets: [
        {
            label: "Homeland",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#7c94cb",
            borderColor: "#7c94cb",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#b8babd",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#b8babd",
            pointHoverBorderColor: "#b8babd",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [70, 100, 30, 50, 20, 40, 10],
            spanGaps: false,
        }
    ]
};

const myLineChart = new Chart(countryDiv, {
    type: 'line',
    data: countryData,
});
// COUNTRY - LINE


