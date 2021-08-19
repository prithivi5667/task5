import {Link} from "react-router-dom"
import {useContext} from 'react'
import ProductContext from './ProductContext'

export default function Productlist(){

    let products = useContext(ProductContext);

    return <>
   
                <Link to ='/Productcreate'>Create Product</Link>
              
                 
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Brand</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Creta</td>
                                            <td>Hyundai</td>
                                           <td>1000000</td>
                                            <td>
                                                <Link to="/Productedit/1">Edit Product</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jazz</td>
                                            <td>Honda</td>
                                            <td>700000</td>
                                            <td>
                                            <Link to="/Productedit/2">Edit Product</Link>
                                            </td>
                                        </tr>
                                       {
                                            products.productlist.map((obj)=>{
                                                
 
                                            return <tr>
                                                <td>{obj.productname}</td>
                                                <td>{obj.productid}</td>
                                                <td>{obj.productbrand}</td>
                                                <td>{obj.price}</td>
                                                <td>
                                                    <Link to="/Productedit/1">Edit User</Link>
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