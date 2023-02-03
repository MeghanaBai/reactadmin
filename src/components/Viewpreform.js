import React from 'react'

export default function Viewpreform() {
  return (
    <div>
    <div className="fluid-container mt-3 pt-5  text-black">
        <h1 style={{textAlign:"center"}}>Permit Application</h1>
    </div>
    <div className="container mt-3 pt-3">
        {/* <table className="table-bordered"> */}
            <table >
            <tr>
                    <th>Name:</th>
                </tr>
                <tr>
                    <td><b>Age:</b></td>
                </tr>
                <tr>
                    <td><b>Gender:</b></td>
                </tr>
                <tr>
                    <td><b>Mobile No:</b></td>
                </tr>
                <tr>
                    <td><b>From (state):</b></td>
                </tr>
                <tr>
                    <td><b>To (state):</b></td>
                </tr>
                <tr>
                    <td><b>License No:</b></td>
                </tr>
                <tr>
                    <td><b>Vehicle class:</b></td>
                </tr>
                <tr>
                    <td><b>RC No:</b></td>
                </tr>
                <tr>
                    <td><b>Date of issue:</b></td>
                </tr>
                <tr>
                    <td><b>Date of expiry:</b></td>
                </tr>
                <tr>
                    <td><b>Departer Date:</b></td>
                </tr>
                <tr>
                    <td><b>Purpose:</b></td>
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
