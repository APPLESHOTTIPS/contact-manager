let employees = [{

        id: "AB02",
        name: "anf shhs",
        age: 26,
        designation: "software engineer",
        location: "Hyderabad"
    },
    {

        id: "AB03",
        name: "anf sn",
        age: 27,
        designation: " teseter  ",
        location: "Hyderabad"
    },
    {

        id: "AB04",
        name: "anfsndjv",
        age: 28,
        designation: "software",
        location: "Hyderabad"
    }
];


let employeeIDs = employees.map(() => {
    return employee.id;
});
console.log(employeeIDs);