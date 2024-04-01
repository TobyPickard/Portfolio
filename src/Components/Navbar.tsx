import { AppBar, Toolbar, Typography, useScrollTrigger, Slide, Button } from '@mui/material';

const TopNavbar = () => {
    const trigger = useScrollTrigger();

    const handleClick = (component: string) => {
        const element = document.getElementById(component);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <a href='/' style={{color: 'white'}}>Toby Pickard</ a>
            </Typography>
            <Button onClick={() => handleClick('hello')} style={{color: 'white'}}>
                Home
            </Button>
            <Button onClick={() => handleClick('about')} style={{color: 'white'}}>
                About
            </Button>
            <Button onClick={() => handleClick('projects')} style={{color: 'white'}}>
                Projects
            </Button>
            <Button onClick={() => handleClick('contact')} style={{color: 'white'}}>
                Contact
            </Button>
            </Toolbar>
        </AppBar>
        </Slide>
    );
    }

    export default TopNavbar;
