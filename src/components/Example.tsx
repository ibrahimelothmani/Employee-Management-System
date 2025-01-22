// you can tape [[rafce]] that help you create your default code for your component

import React from 'react'

const Example = () => {

    const dummyData = [

        {
            id: 1,
            firstName: 'John Doe',
            lastName: 'Doe',
            email: 'john.doe@gmail.com',
        },
        {
            id: 2,
            firstName: 'Jane Doe',
            lastName: 'Doe',
            email: 'jane.doe@gmail.com',
        },
        {
            id: 3,
            firstName: 'John Smith',
            lastName: 'Smith',
            email: 'smith@gmail.com',
        }
    ]

    return (
        <div className='container'>
            <div className='row'>
                <table className='table table-bordered border-success'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dummyData.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Example
