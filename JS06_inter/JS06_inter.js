// Employee data as JSON
const employeeData = [
    {
      "id": "001",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "jobTitle": "Software Engineer",
      "salary": "$80,000"
    },
    {
      "id": "002",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "jobTitle": "Project Manager",
      "salary": "$90,000"
    },
    {
      "id": "003",
      "firstName": "Michael",
      "lastName": "Johnson",
      "email": "michael.johnson@example.com",
      "jobTitle": "Data Analyst",
      "salary": "$70,000"
    },
    {
        "id": "004",
        "firstName": "Anna",
        "lastName": "Schiefer",
        "email": "anna.Schiefer@example.com",
        "jobTitle": "Sales Manager",
        "salary": "$95,000"
     },
     {
        "id": "005",
        "firstName": "Viktor",
        "lastName": "Eggendorfer",
        "email": "viktor.eggendorfer@example.com",
        "jobTitle": "Finance Expert",
        "salary": "$117,000"
      },
      {
        "id": "006",
        "firstName": "Ferdinand",
        "lastName": "Liefers",
        "email": "Ferdinand.Liefers@example.com",
        "jobTitle": "Marketing Manager",
        "salary": "$89,000"
      },
      {
        "id": "007",
        "firstName": "Rafael",
        "lastName": "Miles",
        "email": "Rafael.miles@example.com",
        "jobTitle": "IT Architect",
        "salary": "$139,000"
      },
      {
        "id": "008",
        "firstName": "Maria",
        "lastName": "Kubis",
        "email": "maria.kubis@example.com",
        "jobTitle": "Call Center Agent",
        "salary": "$66,000"
      },
      {
        "id": "009",
        "firstName": "Martina",
        "lastName": "Kovicic",
        "email": "martina.Kovicic@example.com",
        "jobTitle": "Data AnalystProject Owner",
        "salary": "$177,000"
      },
      {
        "id": "010",
        "firstName": "Danijella",
        "lastName": "Schober",
        "email": "Danijella.Schober@example.com",
        "jobTitle": "CEO",
        "salary": "$70,000"
      }
    // Add more employee data here
  ];
  
  // Get the table body
  const tableBody = document.querySelector('#employeeTable tbody');
  
  // Function to display employee data in the table
  function displayEmployeeData() {
    employeeData.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.email}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to display employee data
  displayEmployeeData();
  