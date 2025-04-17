// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345678, 'Seiko Anderson', 1234, 'a.seiko@friends.com', 'Administrative'],
    [23456789, 'Rachel Green', 2345, 'g.rachel@friends.com', 'Marketing'],
    [34567890, 'Monica Geller', 3456, 'g.monica@friends.com', 'Sales'],
    [45678910, 'Phoebe Buffay', 4567, 'b.phoebe@friends.com', 'Executive'],
    [56789012, 'Janice Litman Goralnik', 5678, 'g.janice@friends.com', 'Quality Assurance']  
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
window.addEventListener('DOMContentLoaded', ()=>{
  // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
  if (localStorage.getItem('employees')){
    employees = JSON.parse(localStorage.getItem('employees'));
  }  
});

// GET DOM ELEMENTS
const $ = selecter => document.querySelector(selecter);
const form = $('#addForm');
const empTable = $('#empTable');
const tbody = document.getElementsByTagName('TBODY')[0];
const header = $('#main-header');
const output = document.createElement('output');


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('DOMContentLoaded', buildGrid());

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = form.elements[0].value;
    let name = form.elements[1].value;
    let ext = form.elements[2].value;
    let email = form.elements[3].value;
    let department = form.elements[4].value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT  
    let newEmployee = [parseInt(id), name, parseInt(ext), email, department];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.elements[0].focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete'){
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')){
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            rowIndex = rowIndex - 1;
            console.log(rowIndex);
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex,1);
            // BUILD THE GRID
            buildGrid();
        }
    } 

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.innerHTML = '';
    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let employee of employees){
        // REBUILDING THE ROW STRUCTURE
        let row =  document.createElement('tr');
        row.innerHTML =
        `<td>${employee[0]}</td>
         <td>${employee[1]}</td>
         <td>${employee[2]}</td>
         <td>${employee[3]}</td>
         <td>${employee[4]}</td>
         <td><button class="btn btn-sm btn-danger delete">Delete</button></td>`;
        // BIND THE TBODY TO THE EMPLOYEE TABLE
        tbody.appendChild(row);
    }
    // UPDATE EMPLOYEE COUNT
    output.textContent =`${employees.length} employees`;
    header.appendChild(output);
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};