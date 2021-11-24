import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from '../../Components/Pages/Login/AdminRoute/AdminRoute';
import useAuth from '../../Hooks/useAuth';
import ManageAllOrders from '../Pages/ManageAllOrder/ManageAllOrder';
import MyOrders from '../Pages/MyOrders/MyOrders';
import AddProduct from '../Pages/AddProduct/AddProduct';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import AddReview from '../Pages/AddReview/AddReview';
import MyReviews from '../Pages/MyReviews/MyReviews';
import UpdateReview from '../Pages/UpdateReview/UpdateReview';
import AllReviews from '../Pages/AllReviews/AllReviews';
import './Dashbord.css';
import Payment from '../Pages/Payment/Payment';
import AllProducts from '../Pages/AllProducts/AllProducts';

const drawerWidth = 240;

const Dashbord = (props) => {

  const {admin,LogOut,user} = useAuth();
  console.log("admin data in dashbord ",admin);
  
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
          <ul className="list-group fw-bold ">
           
           <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}} to="/home"> <i className="fas fa-home"></i> Home</NavLink> 
          <hr/>
         
          {
            !admin &&<>
             <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}}  to={`${url}/myOrders`}> <i className="fas fa-shopping-cart"></i> My Orders</NavLink> 
          <hr/>
            <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}}  to={`${url}/payment`}> <i className="fas fa-dollar-sign"></i>  Payment</NavLink> 
          <hr/>
           <NavLink activeClassName="active-navlink" className="fw-bold "  style={{textDecoration:'none',color:'black'}} to={`${url}/addReview`}><i className="fas fa-plus-square"></i> Add Review</NavLink> 
          <hr/>
          <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}} to={`${url}/myReviews`}> <i className="fas fa-folder-plus"></i> My Reviews</NavLink> 
          <hr/>
            </>
          }
         { admin && <>
         <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}}  to={`${url}/makeAdmin`}> <i className="fas fa-user-shield"></i> Make Admin</NavLink> 
          <hr/>
          <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}} to={`${url}/manageOrder`}> <i className="fas fa-cart-arrow-down"></i>  Manage Orders</NavLink> 
          <hr/> 
           <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}} to={`${url}/manageProducts`}> <i className="fas fa-edit"></i> Manage Products</NavLink> 
          <hr/> 
          <NavLink activeClassName="active-navlink" className="fw-bold"  style={{textDecoration:'none',color:'black'}} to={`${url}/addProduct`}> <i className="fas fa-puzzle-piece"></i> Add Product</NavLink> 
          <hr/>
           <NavLink activeClassName="active-navlink" className="fw-bold "  style={{textDecoration:'none',color:'black'}} to={`${url}/manageReviews`}> <i className="fas fa-users"></i> Manage Reviews</NavLink> 
          <hr/> 
          
          </> }
          
          <button className="btn btn-danger" onClick={LogOut}> LogOut </button> 
          </ul>
          <hr/>
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashbord for {admin?
              <>{user.displayName}(Logged As Admin)</>
              :
              <>{user.displayName} </>
            }
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          {/* <h1> All Dashbord </h1>
          <DashbordHome></DashbordHome> */}

        <Switch>
        <Route path={`${url}/myReviews`}>
          <MyReviews/>
        </Route>

        <Route path={`${url}/updateReview/:id`}>
         <UpdateReview/>
        </Route>

        <Route path={`${url}/myOrders`} >
          <MyOrders/>
          </Route>

          <Route path={`${url}/payment`} >
          <Payment/>
          </Route>

          <Route path={`${url}/addReview`} >
          <AddReview/>
          </Route>

        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </AdminRoute>

        <AdminRoute path={`${path}/manageProducts`}>
          <AllProducts/>
        </AdminRoute>

        <AdminRoute path={`${path}/manageOrder`}>
          <ManageAllOrders/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageReviews`}>
          <AllReviews/>
        </AdminRoute>

        <AdminRoute path={`${url}/addProduct`}>
         <AddProduct/>
        </AdminRoute>

        <AdminRoute path={`${url}/updateProduct/:id`}>
         <UpdateProduct/>
        </AdminRoute>

      </Switch>

        </Box>
      </Box>
    );
  }
  
  Dashbord.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashbord;