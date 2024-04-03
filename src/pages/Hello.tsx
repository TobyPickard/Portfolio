import { Button, Typography } from "@mui/material";

const Hello = () => {
    const handleClick = () => {
        const element = document.getElementById('projects');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div id='hello'>
            <div style={{ height: '90vh', paddingTop: '50px', display:'flex', justifyContent: 'center', alignItems:'center' }}>
                <div>
                    <Typography variant="h2" style={{ fontWeight: 'bold' }}>Hello</Typography>
                    <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
                        <Button onClick={handleClick}>Projects</ Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hello;
