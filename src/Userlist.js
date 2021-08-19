import {Link } from "react-router-dom"
import {useContext} from 'react'
import UserContext from './UserContext'

export default function Userlist(){
    let users = useContext(UserContext);
    return <>
 <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                
                <Link to ='/UserCreate'>Create User</Link>
              
                 
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    <tr>
                                            <td>Tiger</td>
                                            <td> Nixon</td>
                                            <td>tiger@gmail.com</td>
                                            <td>123</td>
                                            
                                            <td>
                                                <Link to="/UserEdit/1">Edit User</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Garrett </td>
                                            <td>Winters</td>
                                            <td>garrett@gmail.com</td>
                                            <td>631</td>
                                          
                                            <td>
                                                <Link to="/UserEdit/2">Edit User</Link>
                                            </td>
                                        </tr>
                                        {
                                            users.userlist.map((obj)=>{
                                            return <tr>
                                                <td>{obj.firstname}</td>
                                                <td>{obj.lastname}</td>
                                                <td>{obj.email}</td>
                                                <td>{obj.password}</td>
                                                
                                                <td>
                                                    <Link to="/UserEdit/1">Edit User</Link>
                                                </td>
                                            </tr>
                                            })
                                        }
                                        
                                     
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

    </>

}