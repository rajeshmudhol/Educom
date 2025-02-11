import React, { useState } from 'react';
import Swal from 'sweetalert2';
import employeesData  from './data';
// import Header from './Page/Dashboard/Header';
import List from './Page/Dashboard/List';
import Add from './Page/Dashboard/Add';
import Edit from './Page/Dashboard/Edit';
import "./dashbord.css"

function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        <div className='admin-dash-container'>
            
            <div className='admin-dash-main'>
            {/* <img style={{width:'100%', height:'650px'}} src='https://img.freepik.com/premium-vector/digital-learning-with-video-online-education-concept-blank-space-laptop_255625-425.jpg?w=2000'></img> */}
            {/* List */}
            </div>
            <div className='admin-dash-sub'>
            {!isAdding && !isEditing && (
                <>
                    {/* <Header
                        setIsAdding={setIsAdding}
                    /> */}
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
            </div>
        </div>
    )
}

export default Dashboard;