export default {
  wrapper: {
    width: `calc(100% - 240px)`,
    borderBottom: "1px solid",
    borderColor: "secondary.main",
    boxShadow: "none",
  },
  toggleBtn: {
    borderRadius: "0",
    backgroundColor: "button.main",
    padding: "5px",
    "&:hover": {
      backgroundColor: "button.light",
    },
  },
  actionButtonStyle: {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "button.main",
    "&:hover": {
      backgroundColor: "button.light",
    },
    "&:active": {
      backgroundColor: "button.dark",
    },
  },
  notificationBadge: {
    "& .MuiBadge-badge": {
      padding: "0 4px",
      top: "2px",
      right: "3px",
    },
  },
  profileBtn: {
    padding: "4px 8px",
    borderRadius: "5px",
    gap: "6px",
    backgroundColor: "button.main",
    pointerEvents: "none",
  },
};
