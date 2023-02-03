import React from 'react'

export default function Viewlicform() {
  return (
    <div>
    <div className="fluid-container mt-3 pt-5  text-black">
        <h1 style={{textAlign:"center"}}>License Application</h1>
    </div>
    <div className="container mt-3">
            <table className='table-striped'>
                    <tr>
                        <th >Name:</th>
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
                    <td><b>Age:</b></td>
                </tr>
                <tr>
                    <td><b>Gender:</b></td>
                </tr>
                <tr>
                    <td><b>Blood Group:</b></td>
                </tr>
                <tr>
                    <td><b>Address:</b></td>
                </tr>
                <tr>
                    <td><b>Vehicle className:</b></td>
                </tr>
            </table>
    </div>
    <div className="container mt-4" style={{textAlign:"center"}}>
        <button type="button" className="btn  btn-lg" style={{backgroundColor:"darkgrey"}}>Reject</button>
        <button type="button" className="btn2 btn  btn-lg" style={{backgroundColor:"darkgrey"}}>Approve</button>
    </div>

    </div>
  )
}
