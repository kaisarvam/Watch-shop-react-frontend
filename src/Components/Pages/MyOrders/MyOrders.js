import axios from 'axios';
import React from 'react';
import {useState ,useEffect} from 'react';
import useAuth from '../../../Hooks/useAuth';
import Navbar from '../../shared/Navbar/Navbar';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders,setOrders] = useState([]);
    const [check,setCheck] = useState([]);
    let i = 0;

    let total = 0;
   orders.map((order)=>{
    return total = Number(order.watchPrice) + total;
   })

    useEffect(()=>{
        const uid = user.uid;
const url = `https://afternoon-sea-57536.herokuapp.com/orders/${uid}`;
        axios.get(url)
        .then((res)=>{
            setOrders(res.data);

})
    },[check])

    const deleteCart = (id)=>{
        console.log("delete carts clicked");
        const url =`https://afternoon-sea-57536.herokuapp.com/delete/cart/${id}`
 axios.delete(url)
 .then((res)=>{
     console.log("deleted response ",res.data);
     alert("cart is deleted");
     setCheck(res.data)
 
 })
 
    }



    return (
        <>
        <div className="m-5 text-dark ">
            <h1 className="fw-bold m-5"> My Orders </h1>
           <table className="table table-dark table-striped">
           <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Image</th>
      <th scope="col">Pacage</th>
      <th scope="col">Status</th>
      <th scope="col">Price</th>
      <th scope="col">Option</th>
      
    </tr>
  </thead>
  <tbody>
      {
          orders.map((order)=>{
              i++;
              return(
                <tr key={order._id}>
                <th scope="row">{i}</th>
                <td><img src={order?.watchImage} width="80px" alt="" /></td>
                <td className="pt-5">{order?.watchName}</td>
                {
                    order.status==="Pending"?
                    <td className="text-warning pt-5">{order.status}</td>
                    :
                    <td className="text-success pt-5">{order.status}</td>
                }
                <td className="pt-5">{Number(order?.watchPrice).toFixed(2)} $</td>
                <td><button className="btn btn-danger mt-4" onClick={()=>{
                    const  result = window.confirm(" This Order will be Deleted from cart  ");
                    if(result){
                        deleteCart(order._id)
                    }
                    
                    
                    }}>Cancel Order </button></td>
                
              </tr>
              )
          })
      }

      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><strong>Total : {Number(total).toFixed(2)} $ </strong></td>
          <td></td>
      </tr>
      </tbody>
            </table>
     </div>  
        </>
    );
};

export default MyOrders;