// PRE-WEDDING ATTENDANCE - PIE

const pattendanceDiv = document.getElementById("preweddingAttendance");
// 

const pattendanceData = {
    labels: [
        "Attending",
        "Not attending"
    ],
    datasets: [
        {
            data: [150, 350],
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
        "Attending",
        "Not attending"
    ],
    datasets: [
        {
            data: [475, 25],
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


// // DIETARY REQUIREMENTS - POLAR

// const dietaryDiv = document.getElementById("dietaryChart");
// // 

// const dietaryData = {
//     datasets: [{
//         data: [
//             11,
//             16,
//             7,
//             3,
//             14,
//             9,
//             6
//         ],
//         backgroundColor: [
//             "#FF533D",
//             "#2b3f6c",
//             "#7c94cb",
//             "#b8babd",
//             "#FFCE56",
//             "#ff978a",
//             "#AB987A"
//         ],
//         label: 'My dataset' // for legend
//     }],
//     labels: [
//         "None", 
//         "Vegetarian (fish ok)", 
//         "Vegetarian (fish not ok)", 
//         "Gluten-free", 
//         "Kid's meal", 
//         "Baby bowl", 
//         "Other"
//     ]
// };

// new Chart(dietaryDiv, {
//     data: dietaryData,
//     type: 'polarArea',

// });

// // DIETARY REQUIREMENTS - POLAR


// RELATIONSHIPS - BAR

const relDiv = document.getElementById("relBar");

const relData = {
    labels: ["Family", "School", "University", "Work", "+1", "Friends of parents", "Some random bar"],
    datasets: [
        {
            label: "How you met",
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
            data: [125, 50, 100, 50, 100, 50, 10],
        }
    ]
};

const myBarChart = new Chart(relDiv, {
    type: 'bar',
    data: relData,
});


// PARTY - DOUGHNUT
const partyDiv = document.getElementById("partyDoughnut");

const partyData = {
    labels: [
        "Bride",
        "Groom"
    ],
    datasets: [
        {
            data: [250, 250],
            backgroundColor: [
                "#FF533D",
                "#ff978a"
            ],
            hoverBackgroundColor: [
                "#FF533D",
                "#ff978a"
            ]
        }]
};

const myDoughnutChart = new Chart(partyDiv, {
    type: 'doughnut',
    data: partyData,
});

// // PARTY - DOUGHNUT 

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
            pointHoverBackgroundColor: "#FFCE56",
            pointHoverBorderColor: "#FFCE56",
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


