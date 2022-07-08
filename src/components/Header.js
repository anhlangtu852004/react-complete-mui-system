import { AppBar, Toolbar, Grid } from "@mui/material";

const Header = () => {
    return ( 
        <AppBar position="static">
            
            <Toolbar>
                <Grid container>
                    <Grid item sm={4} style={{border: '1px solid #333'}}>
                        1
                    </Grid>
                    <Grid item sm={8} style={{border: '1px solid #Fff'}}>
                        2
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;