import axios from 'axios';
import React from 'react';
import {useState ,useEffect} from 'react';
import useAuth from '../../../Hooks/useAuth';
import Navbar from '../../shared/Navbar/Navbar';

const ManageAllOrder = () => {


    const {user} = useAuth();
    const [orders,setOrders] = useState([]);
    const [check,setCheck] = useState([]);
    let i = 0;

    useEffect(()=>{
        const uid = user.uid;
const url = `https://afternoon-sea-57536.herokuapp.com/orders`;
        axios.get(url)
        .then((res)=>{
            setOrders(res.data);

})
    },[check])

    const deleteCart = (id)=>{
        const url =`https://afternoon-sea-57536.herokuapp.com/delete/cart/${id}`
 axios.delete(url)
 .then((res)=>{
     console.log("deleted response ",res.data);
     alert("cart is deleted");
     setCheck(res.data)
 
 })
}

 const updateStatus = (id,sat)=>{
    const url =`https://afternoon-sea-57536.herokuapp.com/update/cart/${id}`;
    const status = sat;
    console.log("status is",status);
 axios.put(url,{status :status})
 .then((res)=>{
     console.log("updated result is",res.data);
     setCheck(res.data);
 })
 }



    return (
        <>
        <div className="m-5 text-dark ">
            <h1 className="m-4 fw-bold"> All Orders </h1>
           <table className="table table-dark table-striped">
           <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Image</th>
      <th scope="col">Pacage</th>
      <th scope="col">OrderBy</th>
      <th scope="col">Status</th>
      <th scope="col">Option</th>
      
    </tr>
  </thead>
  <tbody>
      {
          orders.map((order)=>{
              i++;
              return(
                <tr key={order?._id}>
                <th scope="row">{i}</th>
                <td><img src={order?.watchImage} width="80px" alt="" /></td>
                <td className="pt-5">{order?.watchName}</td>
                <td className="pt-3">{order?.name} <br/> Email: {order?.email}</td>
                {
                    order.status==="Pending"?
                   <td> <button className="btn btn-warning mt-4 "  onClick={()=>{
                    const  result = window.confirm(" want to Change Status of this Item ? ");
                    if(result){
                        updateStatus(order._id,"Approved")
                    }
                    
                    
                    }}>{order.status}</button> </td>
                    :
                  <td>  <button className="btn btn-success mt-4 ">{order.status}</button> </td>
                }
                <td><button className="btn btn-danger mt-4" onClick={()=>{
                    const  result = window.confirm(" want to Delete item from cart ? ");
                    if(result){
                        deleteCart(order._id)
                    }
                    
                    
                    }}>Delete</button></td>
                
              </tr>
              )
          })
      }

      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      </tbody>
            </table>
     </div>  
        </>
    );
};

export default ManageAllOrder;