import { ListItem, ListItemIcon } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { grey } from "@mui/material/colors";
import Parser from "html-react-parser";

const Point = (props) => {
  // rendering icons based check / cross and its corresponding card values based on the value received from props
  return (
    <ListItemIcon
      sx={{
        display: "flex",
        alignItems: "center",
        lineHeight: 1.5,
      }}
    >
      {/* checking conditionally whether icon is close or open */}
      {props.icon[0] === "open" ? (
        <>
          <CheckIcon />
          <ListItem sx={{ fontSize: 14, color: grey[900], fontWeight: 500 }}>
            {Parser(props.name[0])}
          </ListItem>
        </>
      ) : (
        <>
          <CloseIcon />
          <ListItem sx={{ fontSize: 14 }}> {props.name}</ListItem>
        </>
      )}
    </ListItemIcon>
  );
};

export default Point;
