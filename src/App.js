import "./App.css";
import Cards from "./Cards";
import { Grid } from "@mui/material";

function App() {
  return (
    // using grid container to display three cards in the page
    <Grid
      className="App"
      container
      rowSpacing={5}
      columnSpacing={{ xs: 0, sm: 3 }}
      py={5}
      px={{ xs: 10, sm: 5, md: 10, lg: 24 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {/* Free Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Cards
          title="FREE"
          price={0}
          values={[
            { "Single User": "open" },
            { "5GB Storage": "open" },
            { "Unlimited Public Projects": "open" },
            { "Community Access": "open" },
            { "Unlimited Private Projects": "close" },
            { "Dedicated Phone Support": "close" },
            { "Free Subdomain": "close" },
            { "Monthly Status Reports": "close" },
          ]}
        />
      </Grid>
      {/* Plus Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Cards
          title="PLUS"
          price={9}
          values={[
            { "<strong>5 Users</strong>": "open" },
            { "50GB Storage": "open" },
            { "Unlimited Public Projects": "open" },
            { "Community Access": "open" },
            { "Unlimited Private Projects": "open" },
            { "Dedicated Phone Support": "open" },
            { "Free Subdomain": "open" },
            { "Monthly Status Reports": "close" },
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {/* Pro card */}
        <Cards
          title="PRO"
          price={49}
          values={[
            { "<strong>Unlimited Users</strong>": "open" },
            { "150GB Storage": "open" },
            { "Unlimited Public Projects": "open" },
            { "Community Access": "open" },
            { "Unlimited Private Projects": "open" },
            { "Dedicated Phone Support": "open" },
            { "<strong>Unlimited </strong> &nbsp; Free Subdomains": "open" },
            { "Monthly Status Reports": "open" },
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default App;
