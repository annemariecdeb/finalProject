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
            data: [200, 50],
            backgroundColor: [
                "#AD974F",
                "#EAEAEA"
            ],
            hoverBackgroundColor: [
                "#AB987A",
                "#EAEAEA"
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
            data: [300, 20],
            backgroundColor: [
                "#FF533D",
                "#AB987A"
            ],
            hoverBackgroundColor: [
                "#FF533D",
                "#AB987A"
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
            "#5a8b5a",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB",
            "#0f1626",
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

const relDiv = document.getElementById("relRadar");

const relData = {
    labels: ["Family", "School", "University", "Work", "+1", "Friends of parents", "Some random bar"],
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

const myRelRadar = new Chart(relDiv, {
    type: 'radar',
    data: relData,
});

// RELATIONSHIPS - RADAR

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

const countryDiv = document.getElementById("countryBubbles");

const countryData = {
    datasets: [
        {
            label: 'Canadian',
            data: [
                {
                    x: 20,
                    y: 30,
                    z: 40,
                    r: 15
                }
// Need to find a way to include more datasets for each country inputted


                
            ],
            backgroundColor:"#AB987A",
            hoverBackgroundColor: "#AB987A",
        }]
};

const myBubbleChart = new Chart(countryDiv,{
    type: 'bubble',
    data: countryData,
});

// COUNTRY - BUBBLES


