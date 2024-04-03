import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const TopNavbar = () => {

    const handleClick = (component: string) => {
        const element = document.getElementById(component);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div style={{ overflowX: 'hidden' }}>
            <AppBar position='static' style={{ zIndex: '100' }}>
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
                </Toolbar>
            </AppBar>
        </div>
    );
}

    export default TopNavbar;
