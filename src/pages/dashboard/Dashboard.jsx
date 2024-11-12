import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StatisticsSummary from "../../components/statisticsSummary/StatisticsSummary ";
import UniqueVisitorGraph from "../../components/uniqueVisitorGraph/UniqueVisitorGraph";
import IncomeOverviewGraph from "../../components/incomeOverviewGraph/IncomeOverviewGraph";
import style from "./style";

const Dashboard = () => {
  return (
    <Box sx={style.wrapper}>
      <Typography sx={style.heading} variant="h5">
        Dashboard
      </Typography>
      <StatisticsSummary />
      <Box sx={style.graphsContainer}>
        <UniqueVisitorGraph />
        <IncomeOverviewGraph />
      </Box>
    </Box>
  );
};

export default Dashboard;
