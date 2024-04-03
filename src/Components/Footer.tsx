// Footer.js
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { AppBar, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
            <Grid container style={{ padding: '100px' }}>
                <Grid item xs={6}>
                    <div style={{ textAlign: 'left' }}>
                        <Typography variant="h5" style={{ paddingBottom: '20px' }}>
                            Toby Pickard
                        </Typography>
                        <Divider />
                        <Typography variant="body2" >
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ textAlign: 'left' }}>
                        <Typography variant="h5" style={{ paddingBottom: '20px' }}>
                            Socials
                        </Typography>
                        <Divider />
                        <IconButton  aria-label='Github' href='https://github.com/TobyPickard' target='_blank' rel='noopener noreferrer'>
                            <GitHubIcon style={{fontSize: 30}} />
                        </IconButton>
                        <IconButton  aria-label='LinkedIn' href='https://www.linkedin.com/in/toby-pickard-84bb53175' target='_blank' rel='noopener noreferrer'>
                            <LinkedInIcon style={{fontSize: 30}} />
                        </IconButton>
                        <IconButton  aria-label='Facebook' href='https://www.facebook.com/toby.pickard' target='_blank' rel='noopener noreferrer'>
                            <FacebookIcon style={{fontSize: 30}} />
                        </IconButton>
                        <IconButton  aria-label='Instagram' href='https://www.instagram.com/tobypickard' target='_blank' rel='noopener noreferrer'>
                            <InstagramIcon style={{fontSize: 30}} />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <Divider />
            <Typography style={{ paddingTop: '40px', fontSize: 10 }}>
                Copyright 2024. Made by Toby Pickard
            </Typography>
        </footer>
    );
}

// const Footer = () => {
//     return (
//         <AppBar position='static' color='primary'>
//             <Toolbar>
//                 <Typography variant="body1" color="inherit">
//                 © {new Date().getFullYear()} Your Website Name
//                 </Typography>
//             </Toolbar>
//         </AppBar>
//     )
// };

export default Footer;
