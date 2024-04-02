import { Button, Chip, Divider, Grid, Typography } from "@mui/material";
import InfoCard from "../Components/InfoCard";

const About = () => {
    const techSkills = ['Java', 'Python', 'AWS', 'Git', 'React.js', 'Node.js', 'Powershell', 'Bash', 'Linux', 'Docker', 'Typescript', 'HTML/CSS']
    const softSkills = ['Agile', 'Pair Programming', 'Scrum']

    const handleContactClick = () => {
        const element = document.getElementById('contact');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div id='about' style={{ paddingBottom: '20px'}}>
            <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <h1>About Me</h1>
            </div>
            <Typography style={{ color: 'black', display:'flex', justifyContent: 'center', alignItems:'center' }}>
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <div style={{ padding: '50px' }} >
                        <Typography>
                            I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </Typography>
                        <div style={{ display:'flex', justifyContent: 'center', alignItems:'center' }}>
                            <Button onClick={handleContactClick}>Contact</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ padding: '50px' }}>
                        <Typography variant="h5">Technical Skills</Typography>
                        <Divider />
                        {techSkills.map((item) => (
                            <Chip style={{ padding: '10px' }} label={item} />
                        ))}
                        <div style={{ paddingTop: '20px'}}>
                            <Typography variant="h5">Soft Skills</Typography>
                            <Divider />
                            {softSkills.map((item) => (
                                <Chip style={{ padding: '10px' }} label={item} />
                            ))}
                        </div>
                        <div style={{ paddingTop: '20px'}}>
                            <Typography variant="h5">Career</Typography>
                            <Divider />
                            <InfoCard title='IBM CIC' lines={['Application Developer', '2020 - Present']}/>
                        </div>
                        <div style={{ paddingTop: '20px'}}>
                            <Typography variant="h5">Education</Typography>
                            <Divider />
                            <InfoCard title='The University of Sheffield' lines={['1st Class', 'MEng, Mechatronic and Robotic Engineering', '2016 - 2020']} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
