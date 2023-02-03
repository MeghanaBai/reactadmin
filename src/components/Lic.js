import React from 'react'
import { Link } from 'react-router-dom'
export default function Reg() {
  return (
    <div>
      <div className="fluid-container mt-3 pt-5 bg-light h text-black">
        <h1 style={{textAlign:"center"}}>License Applications</h1>
      </div>
    <div className="row mt-4">
        <div className="col-sm-1"></div>
        <div className="col col-lg-2 from">
          <div className="col-sm-1"></div>
          <label className="control-label col-sm-6" htmlFor="from"><i className="fa-regular fa-calendar-days"></i><b>From</b></label>
          <input type="date" className="form-control"   name="from" required/>
        </div>
        <div className="col col-lg-2 to">
          <label className="control-label col-sm-6" htmlFor="to"><i className="fa-regular fa-calendar-days"></i><b>To</b></label>
          <input type="date" className="form-control"   name="to" required/>
        </div>
        <div className="col col-lg-2 search">
          <label className="control-label col-sm-8" htmlFor="search"><b>Search by status</b></label>
          <select className="form-select" id="search">
            <option></option>
            <option>pending</option>
            <option>approved</option>
            <option>rejected</option>
          </select>
        </div>
    </div> 
    <button className='btn1 btn btn-secondary mt-4'>Get details</button>
    <div className=" container mt-4 ">
        <table >
            <tr className='th1'>
                <th>S.No</th>
                <th>Applicant No</th>
                <th>Form</th>
            </tr>
            <tr className='td1'>
                <td>1.</td>
                <td></td>
                <td><Link to='/Viewlicform' ><u>view details</u></Link></td>
            </tr>
            <tr className='td1'>
                <td>2.</td>
                <td></td>
                <td><Link to='/Viewlicform' ><u>view details</u></Link></td>
            </tr>
            <tr className='td1'>
                <td>3.</td>
                <td></td>
                <td><Link to='/Viewlicform' ><u>view details</u></Link></td>
            </tr>
        </table>
    </div>
    </div>
  )
}
