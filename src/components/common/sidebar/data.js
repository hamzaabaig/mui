import SpeedIcon from "@mui/icons-material/Speed";
import LoginIcon from "@mui/icons-material/Login";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import FormatColorFillOutlinedIcon from "@mui/icons-material/FormatColorFillOutlined";
import VerticalShadesClosedOutlinedIcon from "@mui/icons-material/VerticalShadesClosedOutlined";
import SportsVolleyballOutlinedIcon from "@mui/icons-material/SportsVolleyballOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

const data = [
  {
    heading: "Navigation",
    items: [{ text: "Dashboard", icon: <SpeedIcon /> }],
  },
  {
    heading: "Authentication",
    items: [
      { text: "Login", icon: <LoginIcon /> },
      { text: "Register", icon: <ListAltIcon /> },
    ],
  },
  {
    heading: "Utilities",
    items: [
      { text: "Typography", icon: <TextFieldsOutlinedIcon /> },
      { text: "Color", icon: <FormatColorFillOutlinedIcon /> },
      { text: "Shadow", icon: <VerticalShadesClosedOutlinedIcon /> },
    ],
  },
  {
    heading: "Support",
    items: [
      { text: "Sample Page", icon: <SportsVolleyballOutlinedIcon /> },
      { text: "Documentation", icon: <QuestionMarkOutlinedIcon /> },
    ],
  },
];

export default data;
