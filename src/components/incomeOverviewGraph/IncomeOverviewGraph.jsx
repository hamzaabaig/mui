import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./style";

const IncomeOverviewGraph = () => {
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Typography sx={style.title} variant="h6">
        Income Overview
      </Typography>

      <BarChart
        sx={style.barChartContainer}
        xAxis={[
          {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3, 9, 4, 5.9, 8.8],
          },
        ]}
        height={300}
      />
    </Box>
  );
};

export default IncomeOverviewGraph;
