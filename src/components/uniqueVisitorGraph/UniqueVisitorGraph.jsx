import React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import style from "./style";

const UniqueVisitorGraph = () => {
  return (
    <Box sx={{ flex: 2, width: "100%" }}>
      <Box sx={style.graphHeader}>
        <Typography sx={{ color: "primary.main" }} variant="h6">
          Unique Visitors
        </Typography>
        <ButtonGroup>
          <Button sx={style.graphHeaderBtn}>Month</Button>
          <Button sx={style.graphHeaderBtn}>Week</Button>
        </ButtonGroup>
      </Box>
      <LineChart
        sx={{
          [`.${lineElementClasses.root}`]: {
            strokeWidth: 25,
          },
          ...style.linechartContainer,
        }}
        xAxis={[
          {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            scaleType: "point",
          },
        ]}
        series={[
          {
            data: [0, 5.5, 2, 8.5, 4.3, 5, 4],
            area: true,
          },
          {
            data: [2, 4, 2, 6.3, 2.2, 8, 7],
            area: true,
          },
        ]}
        height={300}
        grid={{ horizontal: "true" }}
      />
    </Box>
  );
};

export default UniqueVisitorGraph;
