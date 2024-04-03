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
                            <Typography variant="body1" color="text.secondary">{item}</Typography>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
export default InfoCard;
