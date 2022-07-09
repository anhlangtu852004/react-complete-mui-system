import { AppBar, Toolbar, Grid, IconButton,InputBase,Badge,TextField  } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import { Badge } from "@mui/icons-material";

const Header = () => {
    return ( 
        <AppBar position="static">
            
            <Toolbar>
                <Grid container>
                    <Grid item style={{border: '1px solid #333'}}>
                        <InputBase fullWidth></InputBase>
                        {/* <TextField id="outlined-basic" label="nhap ten vao " variant="standard" />  */}
                    </Grid>
                    <Grid item sm style={{border: '1px solid #333'}}>

                    </Grid>
                    <Grid item style={{border: '1px solid #Fff'}}>
                        <IconButton color="secondary"><AddShoppingCartIcon /></IconButton>
                        <IconButton>
                            <Badge badgeContent={5} color="secondary">
                                <NotificationsNoneIcon color="action" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={5}>
                                <ChatBubbleOutlineIcon color="action" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                           <PowerSettingsNewIcon color="action" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;