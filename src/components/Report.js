import React from 'react'

export default function Report() {
  return (
    <div>
        <div className="fluid-container mt-3 pt-5 bg-light h text-black">
        <h1 style={{textAlign:"center"}}><u>Report Page</u></h1>
      </div>
    <div className="box mt-2">
        <div className="container mt-3">
            {/* <!-- Nav tabs --> */}
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#reg">Registration</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#lic">License</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#pre">Premit</a>
              </li>
            </ul>
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
                  <option>Applicant</option>
                  <option>pending</option>
                  <option>approved</option>
                  <option>rejected</option>
                </select>
              </div>
            </div> 
          <button className='btn1 btn btn-secondary mt-4'>Get details</button>
            {/* <!-- Tab panes --> */}
            <div className="tab-content">
                <div id="reg" className="container tab-pane active">
                    <div className=" mt-4 table-responsible">
                        <table className='td1' >
                            <tr className='th1'>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Regn No</th>
                                <th>Regn Validity</th>
                                <th>Vehicle class</th>
                                <th>Date of Vc purchased</th>
                                <th>Date of Regn</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>xyz</td>
                                <td>abc</td>
                                <td>Ts1239</td>
                                <td>12/12/2024</td>
                                <td>two wheeler</td>
                                <td>1/11/2022</td>
                                <td>3/12/2022</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    
                </div>
                <div id="lic" className="container tab-pane fade">
                    <div className=" mt-3 table-responsible">
                        <table className='td1' >
                            <tr className='th1'>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Lic No</th>
                                <th>Lic Validity</th>
                                <th>Vehicle class</th>
                                <th>Date of issue</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="pre" className="container tab-pane fade">
                    <div className=" mt-3 table-responsible">
                        <table className='td1' >
                            <tr className='th1'>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>RC No</th>
                                <th>Lic No</th>
                                <th>Lic Validity</th>
                                <th>Vehicle class</th>
                                <th>Purpose</th>
                                <th>Dept Date</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                 </div>
            </div>
        </div> 
        <div className="container mt-4">
            <button className="btn1 btn btn-info"><i className="fa-solid fa-print"></i> Print</button>
        </div>
        <div className="mt-3">
        </div>
    </div>
    </div>
  )
}
