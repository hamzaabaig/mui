import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Grid from "@mui/material/Grid2";
import style from "./style";

const StatisticsSummary = () => {
  return (
    <Grid container spacing={3} sx={style.container}>
      <Grid item sx={style.cardWrapper}>
        <Card sx={style.card}>
          <CardContent>
            <Typography gutterBottom>Total Page Views</Typography>
            <Box sx={style.valueBox}>
              <Typography variant="h5">4,42,236</Typography>
              <Box sx={style.trendBox}>
                <TrendingUpIcon />
                <Typography sx={{ fontWeight: "bold" }}>59.3%</Typography>
              </Box>
            </Box>
            <Typography variant="body2">
              You made an extra 35,000 this year
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sx={style.cardWrapper}>
        <Card sx={style.card}>
          <CardContent>
            <Typography gutterBottom>Total Users</Typography>
            <Box sx={style.valueBox}>
              <Typography variant="h5">78,250</Typography>
              <Box sx={style.trendBox}>
                <TrendingUpIcon />
                <Typography sx={{ fontWeight: "bold" }}>70.5%</Typography>
              </Box>
            </Box>
            <Typography variant="body2">
              You made an extra 8,900 this year
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sx={style.cardWrapper}>
        <Card sx={style.card}>
          <CardContent>
            <Typography gutterBottom>Total Orders</Typography>
            <Box sx={style.valueBox}>
              <Typography variant="h5">18,800</Typography>
              <Box
                sx={{
                  ...style.trendBox,
                  backgroundColor: "button.light",
                }}
              >
                <TrendingDownIcon />
                <Typography sx={{ fontWeight: "bold" }}>27.4%</Typography>
              </Box>
            </Box>
            <Typography variant="body2">
              You made an extra 1,943 this year
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item sx={style.cardWrapper}>
        <Card sx={style.card}>
          <CardContent>
            <Typography gutterBottom>Total Sales</Typography>
            <Box sx={style.valueBox}>
              <Typography variant="h5">$35,078</Typography>
              <Box
                sx={{
                  ...style.trendBox,
                  backgroundColor: "button.light",
                }}
              >
                <TrendingDownIcon />
                <Typography sx={{ fontWeight: "bold" }}>27.4%</Typography>
              </Box>
            </Box>
            <Typography variant="body2">
              You made an extra $20,395 this year
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatisticsSummary;
