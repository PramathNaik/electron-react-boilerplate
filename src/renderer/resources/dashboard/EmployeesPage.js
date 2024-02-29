import React from 'react'

export const EmployeesPage = () => {
  return (
    <div className='container'>
    <div className="uk-grid-small uk-child-width-1-2@s" data-uk-grid>
    <div className='uk-width-expand@m'>
        <div className=""><input type='text' className='uk-input search' placeholder='Search Employee'></input></div>

    </div>
    <div className="uk-width-1-5@m">
    </div>
    </div>
    <div className="uk-grid-small uk-child-width-1-4@s create1" data-uk-grid>
    <div>
        <div className="">All Employee</div>

    </div>
    <div className="">
        <div className="">Classes</div>
    </div>
    <div>
        <div className="">Categories</div>
    </div>

    <div className="">
        <div className="">Apply Filter</div>
    </div>

</div>
<table className="uk-table  uk-table-divider">
    <thead>
        <tr>
            <th>Employee Name</th>
            <th>Address</th>
            <th>className</th>
            <th>Contact number</th>
            <th></th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>

</table>
    </div>
  )
}
