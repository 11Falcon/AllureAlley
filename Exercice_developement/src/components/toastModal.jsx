import React, {useState,  useEffect} from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FaBars, FaCog, FaImages,FaDna } from 'react-icons/fa'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-modal'


Modal.setAppElement('#root')


const sidebarStyles = {
  width: '6vw',
  height: '70vw',
  backgroundColor: '#86A8E7',
  color: '#000000',
  position: "relative",
};

const menuItemStyles = {
  padding: '10px',
  
};

const customStyles = {
  content: {
    width:'60vw',
    height:'80vh',
    top: '20%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(10%, -10%)',
  },
};


function ToastModal() {

    const Programming = () =>{
      toast("Setting your Model!",{autoClose :2000,hideProgressBar:true})} 
    const Importing = () =>{
      toast("Import your Images",{autoClose :2000,hideProgressBar:true});

    } 
    const Images = () =>{
      toast("Choose Your Model",{autoClose :2000,hideProgressBar:true})

    } 

  return (
    <div>
      <div className="main-content">
        <Sidebar style={sidebarStyles}>
          <Menu iconShape="square">
            <MenuItem style={menuItemStyles} icon={<FaBars />}>Dashboard</MenuItem>
            <SubMenu title="Training" icon={<FaDna />} onClick={Programming}>
              <MenuItem style={menuItemStyles} icon={<FaImages />} onClick={Images}>Import images</MenuItem>
              <MenuItem style={menuItemStyles} icon={<FaImages />} onClick={Importing}>Visualizing</MenuItem>
            </SubMenu>
            <SubMenu title="Settings" icon={<FaCog />}>
              <MenuItem style={menuItemStyles}>General</MenuItem>    
              <MenuItem style={menuItemStyles}>Security</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <div className="content">
        </div>
        <ToastContainer />
      </div>
    </div>
  )

}
export default ToastModal

