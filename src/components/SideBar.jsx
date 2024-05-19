import React, { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import eye from '../assets/Eye.png';
import analysis from '../assets/analysis.png';
import general from '../assets/general.png';
import hair from '../assets/hair.png';
import heart from '../assets/heart.png';
import help from '../assets/help.png';
import lungs from '../assets/lungs.png';
import neurons from '../assets/Neuron.png';
import settings from '../assets/settings.png';
import xray from '../assets/xray.png';
import { useNavigate,useLocation  } from 'react-router-dom';

const drawerWidth = 122;

export default function SideBar() {
  const navigate = useNavigate();
  const navPaths = ["general", "optometry", "neurology", "pulmonology", "","radiology", "dermatology", "analysis", "help", "setting"];
  const imagePaths = [general, eye, neurons, lungs, heart, xray, hair, analysis, help, settings];
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    const currentPath = location.pathname.substring(1); 
    const selectedIndex = navPaths.indexOf(currentPath);
    setSelectedItem(selectedIndex === -1 ? 4 : selectedIndex); 
  }, [location.pathname]);

  const handleItemClick = (index) => {
    const nav = navPaths[index];
    navigate(`/${nav}`);
    setSelectedItem(index);
  };

  

  return (
    <Box sx={{ display: 'flex', maxWidth: '152',   }}>
      {/* <CssBaseline /> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: '#0D0E17',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column',}}>
          {imagePaths.map((path, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ flex: '1 1 auto',alignItems: 'center',justifyContent: 'center' }}
              onClick={() => handleItemClick(index)}
              selected={selectedItem === index}
            >
              <ListItemButton
                sx={{
                  maxWidth: '100px',
                  flex: '1 1 auto',
                  paddingY: 1,
                  paddingX: 0,
                  margin: 0,
                  background:selectedItem === index ? 'linear-gradient(to bottom, #18FFF1 0%, #0A78F3 100%)' : 'inherit',
                  border: selectedItem === index ? '2px solid black' : 'none', 
                  boxShadow: selectedItem === index ? '4px 4px 8px rgba(181, 181, 181, 0.25)': 'none', 
                  borderRadius:2,
                  '&:hover': { 
                    background:selectedItem === index ? 'linear-gradient(to bottom, #18FFF1 0%, #0A78F3 100%)' : 'inherit',
                    
                  },
                }}
              >
                <ListItemIcon sx={{ flex: '1 1 auto', display: 'flex',justifyContent: 'center' }}>
                  <img src={path} alt={path} style={{ height: '45px', width: '80px' }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
