import { Card, CardContent, Typography } from "@mui/material";
import CardProps from "../Interfaces/CardProps";

const InfoCard: React.FC<CardProps> = ({ title, lines }) => {
    return (
        <Card>
            <CardContent>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Typography variant="h6">
                            {title}
                        </Typography>
                        {lines.map((item) => (
                            <Typography variant="body1">{item}</Typography>
                        ))}
                        {/* <Typography variant="body1">
                            Application Developer
                        </Typography>
                        <Typography variant="body1">
                            2020 - Present
                        </Typography> */}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
export default InfoCard;
