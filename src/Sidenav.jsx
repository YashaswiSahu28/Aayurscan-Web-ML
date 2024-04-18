import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Home from './pages/Home';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import QuizIcon from '@mui/icons-material/Quiz';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import {useNavigate} from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor:'#3b7d3a',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

/*const AppBar2 = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBar>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));*/

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box sx={{ display: 'flex' , backgroundColor: '#255524'}}>
      

      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#052507" }}>
        <Toolbar>
          <img src={require(`./assets/ayurleaf.jpeg`)} alt="Logo" 
          style={{ width: '50px', height: '50px' , margin: 0, padding: 0, marginRight: '16px', borderRadius:'50%' }} />
          <Typography variant="h6" noWrap component="div">
              Aayurscan
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ backgroundColor: '#3b7d3a' }}>
      <Drawer variant="permanent" open={open} anchor="right">
        <Box sx={{ backgroundColor: '#3b7d3a' }}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        </Box>
        <Divider />
        <Box sx={{ backgroundColor: '#3b7d3a' }}>
        {open && (

        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate("/")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <HomeIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <InboxIcon/>
                 </HomeIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 , color: 'white',fontWeight: 'bold'}} />
              </ListItemButton>
            </ListItem>
        </List>
        )}
         <Divider />
        {open && (
        <List>
           <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate("/history")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                < HistoryIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon/>
                </ HistoryIcon>
                <ListItemText primary="History" sx={{ opacity: open ? 1 : 0 , color: 'white',fontWeight: 'bold'}} />
              </ListItemButton>
            </ListItem>
        </List>
        )}
        <Divider />
        {open && (
        <List>
           <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate("/floraspot")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
        
                < LocationOnIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon/>
                </ LocationOnIcon>
              
              <ListItemText primary="FloraSpot" sx={{ opacity: open ? 1 : 0 , color: 'white',fontWeight: 'bold'}} />
              </ListItemButton>
            </ListItem>
        </List>
        )}
        <Divider />
        {open && (
        <List>
           <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate("/floraforum")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <Groups2SharpIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon/>
                </Groups2SharpIcon>
                <ListItemText primary="FloraForum" sx={{ opacity: open ? 1 : 0, color: 'white' ,fontWeight: 'bold'}} />
              </ListItemButton>
            </ListItem>
        </List>)}
        <Divider />
        {open && (
        <List>
           <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate("/plantplay")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                < QuizIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon/>
                </ QuizIcon>
                <ListItemText primary="PlantPlay" sx={{ opacity: open ? 1 : 0 ,color: 'white',fontWeight: 'bold'}} />
              </ListItemButton>
            </ListItem>
        </List>)}
        <Divider />
        {open && (
        <List>
           <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate("/settings")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <SettingsSuggestIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InboxIcon/>
                </SettingsSuggestIcon>
                <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 , color: 'white',fontWeight: 'bold'}} />
              </ListItemButton>
            </ListItem>
        </List>)}
        </Box>
        
      </Drawer>
      </Box>
      
    </Box>
  );
}