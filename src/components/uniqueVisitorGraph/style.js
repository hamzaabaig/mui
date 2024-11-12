export default {
  graphHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    gap: "8px",
    flexDirection: { xs: "column", sm: "row" },
  },
  graphHeaderBtn: {
    borderRadius: "5px",
    backgroundColor: "button.dark",
    "&:hover": {
      backgroundColor: "button.main",
    },
  },
  linechartContainer: {
    borderRadius: "4px",
    backgroundColor: "primary.main",
  },
};
