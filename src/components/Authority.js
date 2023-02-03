import React from 'react'
import { Link } from 'react-router-dom';
export default function Authority() {
  return (
    <div>
        <div className="fluid-container mt-3 pt-5 bg-light h1">
          <h1 style={{textAlign:"center"}}><u>WELCOME ADMIN</u></h1>
        </div>
    <div className="h">
        <div className="container mt-3">
            <Link to='/Reg'><button type="button" className="btn1 btn btn-info btn-lg "><i className="fa-solid fa-clipboard-list"></i> Vc Regn Applications</button></Link>
        </div>
        <div className="container mt-3">
            <Link to='/Lic'><button type="button" className=" btn1 btn btn-info btn-lg" ><i className="fa-solid fa-car"></i>License Applications</button></Link>
        </div>
        <div className="container mt-3">
        <Link to='/Pre'><button type="button" className="  btn1 btn btn-info btn-lg" ><i className="fa-solid fa-truck"></i> Permit Applications</button></Link>
        </div>
        <div className="container mt-3">
        <Link to='/Report'><button type="button" className="  btn1 btn btn-info btn-lg"><i className="fa-regular fa-calendar-days"></i>Report</button></Link>
        </div>
    </div>
    </div>
  )
}
