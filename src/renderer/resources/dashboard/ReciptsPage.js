import React from 'react'

export const ReciptsPage = () => {
  return (
    <div className='container'>
    <div className="uk-grid-small uk-child-width-1-6@s create1" data-uk-grid>
    <div>
        <div className="">Recent Recipt</div>

    </div>
    <div className="">
        <div className="">From date</div>
    </div>
    <div>
        <div className="">To Date</div>
    </div>
    <div>
        <div className="">On Date</div>
    </div>
    <div className="">
        <div className="">Apply Filter</div>
    </div>
    <div className=""><button className='uk-button uk-button-primary cre'>New Recipt</button></div>


</div>

<table className="uk-table  uk-table-divider">
    <thead>
        <tr>
            <th>Ref No</th>
            <th>Date</th>
            <th>Paid By</th>
            <th>Narration</th>
            <th>Amount</th>
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
    </div>  )
}
