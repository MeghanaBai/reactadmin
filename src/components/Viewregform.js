import React from 'react'

export default function Viewregform() {
  return (
    <div>
    <div className="fluid-container mt-3 pt-5  text-black">
        <h1 style={{textAlign:"center"}}>Vehicle Regn Application</h1>
    </div>
    <div className="container mt-3 pt-3">
        {/* <table className="table-bordered"> */}
            <table>
            <tr>
                    <th>Name:</th>
                </tr>
                <tr>
                    <td><b>Gender:</b></td>
                </tr>
                <tr>
                    <td><b>Father Name:</b></td>
                </tr>
                <tr>
                    <td><b>Mobile No:</b></td>
                </tr>
                <tr>
                    <td><b>DOB:</b></td>
                </tr>
                <tr>
                    <td><b> Temporay RC No:</b></td>
                </tr>
                <tr>
                    <td><b>Address of Dealer:</b></td>
                </tr>
                <tr>
                    <td><b>Address:</b></td>
                </tr>
                <tr>
                    <td><b>Vehicle class:</b></td>
                </tr>
                <tr>
                    <td><b>Date of vehicle purchased:</b></td>
                </tr>
            </table>
        {/* </table> */}
    </div>
    <div className="container mt-4" style={{textAlign:"center"}}>
        <button type="button" className="btn  btn-lg" style={{backgroundColor:"darkgrey"}}>Reject</button>
        <button type="button" className="btn2 btn  btn-lg" style={{backgroundColor:"darkgrey"}}>Approve</button>
    </div>

    </div>
  )
}
