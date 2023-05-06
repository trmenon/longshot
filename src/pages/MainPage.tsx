import React, {useState} from "react";
import { constants } from "../config";

// Assets
import { MenuIcon } from "../components/icons";

// Legacy Imports
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// HOC Imports
import { Sidebar } from "./sidebar/Sidebar";
import { WidgetComponent } from "./widget/Widget";

export const MainPage: React.FC = ()=> {
    // States
    const [open, setOpen] = useState(true);

    // Event Handlers
    const handleDrawerOpen = ()=> setOpen(true);
    const handleCloseDrawer = ()=> setOpen(false);

    // Renderer
    return(
        <React.Fragment>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <CssBaseline />                
                <AppBar
                    position = {"fixed"}
                    // color = {"transparent"}     
                    sx={{backgroundColor: '#f9fafc'}}
                    elevation={1}               
                >
                    <Toolbar 
                        variant={'dense'}
                        sx={{
                            width: open? `calc(100vw - ${constants.drawerWidth}px)`: '100vw',
                            marginLeft: open? `${constants.drawerWidth}px`: '0px',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{display:` ${open === true? 'none': 'flex'}`}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            noWrap 
                            component="div"
                            sx={{
                                color: '#262523', 
                                fontSize: '24px',
                                fontWeight: 700
                            }}
                        >
                            Longshot AI
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Sidebar
                    open = {open}
                    onClose = {handleCloseDrawer}
                />
                <Box 
                    sx={{
                        width: open? `calc(100% - ${constants.drawerWidth}px)`: '100%',
                        flexGrow: 1,
                        marginLeft: open? '0px': `-${constants.drawerWidth}px`,
                        mt: '32px'
                    }}
                >
                    <WidgetComponent/>
                </Box>
            </Box>
        </React.Fragment>
    )
}