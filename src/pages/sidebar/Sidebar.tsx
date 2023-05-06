import React from 'react';
import { constants } from '../../config';

// Assets
import { 
    LeftIcon, 
    CartIcon, 
    MapIcon, 
    NetworkIcon,
    LogoIcon,
    RecipeIcon,
    WidgetIcon,
    BlogIcon,
    TemplatesIcon,
    IntegrationIcon, 
    FavouriteIcon,
    SpotIcon,
    SemrushIcon
} from '../../components/icons';

// Legacy Imports
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// Interface
interface SidebarProps {
    open: boolean;
    onClose: ()=> void;
}

export const Sidebar: React.FC <SidebarProps> = ({open, onClose})=> {
    // Renderer
    return(
        <React.Fragment>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                onClose={onClose}
                sx={{
                    width: constants.drawerWidth,
                    flexShrink: 0,
                    padding: 0,
                    '& .MuiDrawer-paper': {
                        width: constants.drawerWidth,
                        boxSizing: 'border-box',
                        padding: 0,
                        margin: 0,
                        overflow: 'scroll',
                        '&:: -webkit-scrollbar': {display: 'none'}
                    },
                }}                
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        height: '100%',
                        width: '100%',
                        py: '8px'
                    }}
                >
                    <Box sx={{width: '100%'}}>
                        <Stack spacing={0} sx={{width: '100%'}}>
                            <LogoIcon width={'200px'} height={'40px'}/>
                            <Box
                                sx={{
                                    borderRadius: '0px',
                                    padding: '12px',
                                    backgroundColor: '#eceff1'
                                }}
                            >
                                <Stack 
                                    spacing={'0px'}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        textAlign: 'left'
                                    }}
                                >
                                    <Typography 
                                        gutterBottom
                                        sx={{color: '#7e81a6', fontSize: '14px',fontWeight: 400}}
                                    >
                                        Project
                                    </Typography>
                                    <Typography 
                                        gutterBottom
                                        sx={{color: '#262523', fontSize: '16px',fontWeight: 600}}
                                    >
                                        My first project
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    my: '4px',
                                    borderBottom: '1px solid #CCC',
                                    height: '232px',
                                    overflow: 'scroll',
                                    '&:: -webkit-scrollbar': {display: 'none'}
                                }}
                            >
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><WidgetIcon /></ListItemIcon>
                                            <ListItemText 
                                                primary="Dashboard" 
                                                primaryTypographyProps={{color: '#607d8b', fontWeight: 600}}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><RecipeIcon /></ListItemIcon>
                                            <ListItemText 
                                                primary="Recipes" 
                                                primaryTypographyProps={{color: '#607d8b', fontWeight: 600}}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <Divider variant='middle'/>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><BlogIcon /></ListItemIcon>
                                            <ListItemText 
                                                primary="Blog" 
                                                primaryTypographyProps={{color: '#607d8b', fontWeight: 600}}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><TemplatesIcon /></ListItemIcon>
                                            <ListItemText 
                                                primary="Templates" 
                                                primaryTypographyProps={{color: '#607d8b', fontWeight: 600}}
                                            />
                                        </ListItemButton>                                        
                                    </ListItem>
                                    <ListItem>
                                        <List disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon><FavouriteIcon /></ListItemIcon>
                                                    <ListItemText 
                                                        primary="Favorites" 
                                                        primaryTypographyProps={{
                                                            color: '#5e5559', 
                                                            fontWeight: 500,
                                                            fontSize: '12px'
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon><SpotIcon /></ListItemIcon>
                                                    <ListItemText 
                                                        primary="Custom Templates" 
                                                        primaryTypographyProps={{
                                                            color: '#5e5559', 
                                                            fontWeight: 500,
                                                            fontSize: '12px'
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><IntegrationIcon /></ListItemIcon>
                                            <ListItemText 
                                                primary="Integrations" 
                                                primaryTypographyProps={{color: '#607d8b', fontWeight: 600}}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <List disablePadding>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon><SemrushIcon /></ListItemIcon>
                                                    <ListItemText 
                                                        primary="Semrush" 
                                                        primaryTypographyProps={{
                                                            color: '#5e5559', 
                                                            fontWeight: 500,
                                                            fontSize: '12px'
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </ListItem>
                                </List>
                            </Box>
                            
                            
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            width: '100%',
                            px: '12px'
                        }}
                    >
                        <Stack spacing={0} sx={{width: '100%'}}>
                            <Card 
                                sx={{ width: '100%', backgroundColor: '#ecf9ff', borderRadius: '8px' }}
                                elevation={0}
                            >
                                <CardHeader
                                    avatar={<Avatar sx={{ bgcolor: deepPurple[500] }}>Ks</Avatar>}
                                    title="Kritikalpa.saha"
                                    subheader="Credits Used: 313.2"
                                    subheaderTypographyProps={{textAlign: 'left'}}
                                    titleTypographyProps={{textAlign: 'left'}}
                                />
                                <CardContent>
                                    <Stack spacing={'4px'}>
                                        <Button 
                                            variant='contained'
                                            size='small'
                                            color={'success'}
                                            startIcon={<CartIcon/>}
                                            fullWidth
                                        >
                                            Change Plan
                                        </Button>
                                        <Stack 
                                            direction={'row'} 
                                            spacing={'8px'}
                                            sx={{
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'flex-start', 
                                                width: '100%',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <MapIcon/>
                                            <Typography 
                                                display="block" 
                                                gutterBottom
                                                sx={{color: '#879ea5', fontSize: '16px',fontWeight: 600 }}
                                            >
                                                Product Roadmap
                                            </Typography>
                                        </Stack>
                                        <Stack 
                                            direction={'row'} 
                                            spacing={'8px'}
                                            sx={{
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'flex-start', 
                                                width: '100%',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <NetworkIcon/>
                                            <Typography 
                                                display="block" 
                                                gutterBottom
                                                sx={{color: '#879ea5', fontSize: '16px', fontWeight: 600}}
                                            >
                                                What's New?
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Button 
                                variant="text"
                                color={'primary'} 
                                startIcon={<LeftIcon />}
                                fullWidth
                                onClick={onClose}
                            >
                                Collapse
                            </Button>
                        </Stack>
                        
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}