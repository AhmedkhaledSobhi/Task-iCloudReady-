import React from 'react'

import CustomerEngagement from '../image/Customer Engagement.png'
import ActionableInsights from '../image/Actionable Insights.png'
import EmployeesProductivity from '../image/Employees Productivity.png'
import OperationsExcellence from '../image/Operations Excellence.png'


import HomeStyle from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <section >
            <div className=' position-relative vh-100 overflow-hidden'>
                <div id='Rectangle24' className=''>
                </div>
                <div id='Support'  className='w-100 h-25  position-sta d-flex  align-items-end'>
                    <div className='container w-75 d-flex justify-content-between '>
                        <h3 className=' mb-4'>Get Support <i className="fa-brands fa-sketch"></i></h3>
                        <div className={`d-flex justify-content-center align-items-center ${HomeStyle.Support}`}>
                        <i className="fa-brands fa-sketch fa-9"></i>
                        </div>
                    </div>
                </div>

                <div id='curd'>
                    <div  className='container w-100 mt-3'>
                        <div className='row'>
                            <div className='col-md-3 text-white'>
                                <Link to='CustomerEngagement' className='text-decoration-none text-white'>
                                <div className=' border rounded-3 bg-white'>
                                    <div className='text-center'>
                                        <img className=' my-4' src={CustomerEngagement} alt="" />
                                    </div>
                                    <div id='Customer'  className='border border-5 border-white rounded-3 p-3'>
                                        <h6>Customer Engagement</h6>
                                        <p>Get your own mobile app for industry specific</p>
                                        <div className=' d-flex justify-content-between align-content-center'>
                                            <span className='mt-2'>100 DTSU*</span>
                                            <div className=' d-flex'>
                                                <div id='crudIcon' className=' rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-regular fa-pen-to-square fa-5 text-white"></i>                                      
                                                </div>
                                                <div  id='crudIcon' className=' rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-solid fa-plus fa-9 text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div className='col-md-3 text-white'>
                                <Link  to='Actionable' className='text-decoration-none text-white'>
                                <div className=' border rounded-3 bg-white pt-4'>
                                    <div className='text-center'>
                                        <img className=' my-3' src={ActionableInsights} alt="" />
                                    </div>
                                    <div id='Actionable' className='border border-5 border-white rounded-3 p-3'>
                                        <h6>Actionable </h6>
                                        <p>Create Dashboards </p>
                                        <div className=' d-flex justify-content-between align-content-center pt-3'>
                                            <span className='mt-2'>100 dTSU *</span>
                                            <div className=' d-flex'>
                                                <div id='crudIcon' className=' rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-regular fa-pen-to-square fa-5 text-white"></i>                                      
                                                </div>
                                                <div  id='crudIcon' className='rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-solid fa-plus fa-9 text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>

                            </div>

                            <div className='col-md-3 text-white'>
                            <Link  to='EmployeesProductivity' className='text-decoration-none text-white'>
                                <div className=' border rounded-3 bg-white'>
                                    <div className='text-center'>
                                        <img className=' my-4' src={EmployeesProductivity} alt="" />
                                    </div>
                                    <div id='Employees' className='border  border-5 border-white rounded-3 p-3'>
                                        <h6>Employees Productivity</h6>
                                        <p>KPI Builder , Work Conf,Create Oracle Requests</p>
                                        <div className=' d-flex justify-content-between align-content-center'>
                                            <span className='mt-2'>50 DTSU*</span>
                                            <div className=' d-flex'>
                                                <div id='crudIcon' className='rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-regular fa-pen-to-square fa-5"></i>                                      
                                                </div>
                                                <div  id='crudIcon' className='rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-solid fa-plus fa-9"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            </div>

                            <div className='col-md-3 text-white'>
                            <Link  to='OperationsExcellence' className='text-decoration-none text-white'>
                                <div className=' border rounded-3 bg-white pt-2'>
                                    <div className='text-center'>
                                        <img className=' my-4' src={OperationsExcellence} alt="" />
                                    </div>
                                    <div id='Operations' className='border border-5 border-white rounded-3 p-3'>
                                        <h6 className=''>Operations Excellence</h6>
                                        <p>Tenant/lessee Managment</p>
                                        <div className=' d-flex justify-content-between align-content-center pt-2'>
                                            <span className='mt-2'>100 DTSU*</span>
                                            <div className=' d-flex'>
                                                <div id='crudIcon' className='rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-regular fa-pen-to-square fa-5"></i>                                      
                                                </div>
                                                <div  id='crudIcon' className='rounded-circle d-flex justify-content-center align-items-center mx-1'>
                                                    <i className="fa-solid fa-plus fa-9"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            </div>

                        </div>

                        <div className='mt-2 d-flex flex-row-reverse'> 
                            <div className='d-flex me-0'><span className='text-muted mx-2'> <i className="fa-solid fa-gears text-success fa5"></i> Remaining DTSUs: 200</span>
                            <span className='text-muted mx-2'> <i className="fa-solid fa-gears text-danger fa5"></i> Remaining DTSUs: 350</span></div>
                        </div>
                    </div>
                </div>
                <div id='footer' className='bg-white p-2 mt-5 text-center'>
                    <p className=''>Got questions?  Take a look at our <span>FAQs</span> , talk to us on Twitter <span>@icloudready</span>  or send an email to <span>team@icloud-ready.com</span></p>
                </div>
                <div id='Rectangle29'></div>

            </div>
        </section> 
    </>
  )
}
