import DefaultAvatar from "./DefaultAvatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const StyledCard = styled(Card)`
  max-width: 345px;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const TeamMemberCard = ({ name, role }: { name: string; role: string }) => (
  <StyledCard>
    <CardContent>
      <DefaultAvatar />
    </CardContent>
    <CardContent sx={{ textAlign: "center" }}>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {role}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Slack</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </StyledCard>
);

export default TeamMemberCard;
