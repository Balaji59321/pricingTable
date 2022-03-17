import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Point from "./Point";
import { List } from "@mui/material";
import { grey } from "@mui/material/colors";
import "./Cards.css";

const Cards = (props) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 3,
        padding: "5px 25px",
        flexGrow: 1,
        transition: "all 0.5s",
      }}
      className="hover"
    >
      <CardContent
        sx={{
          textAlign: "center",
          color: grey[500],
          fontSize: 15,
        }}
      >
        {/* header to the card */}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "inherit",
            fontWeight: "bolder",
            letterSpacing: "2px",
          }}
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box sx={{ display: "inline", fontSize: 42, fontWeight: 900 }}>
            {`$${props.price}`}
          </Box>
          /month
        </Typography>
      </CardContent>
      {/* line that divides head and body in card */}
      <Divider variant="fullWidth" />
      {/* Lists all the values received from props and the same is iterated for card values */}
      <List sx={{ padding: "10px 0" }}>
        {props.values.map((el, ind) => (
          <Point key={ind} name={Object.keys(el)} icon={Object.values(el)} />
        ))}
      </List>
      {/* renders clickable button in card */}
      <CardActions sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Button variant="contained" sx={{ width: "100%", borderRadius: 4 }}>
          BUTTON
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
