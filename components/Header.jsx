import { Box, Typography } from "@mui/material";

const Header = ({ icon, text }) => {
  return (
    <header>
      <Box sx={{ borderBottom: "1px solid black" }}>
        <Typography variant="h4">
          {icon}&#160;{text}
        </Typography>
      </Box>
    </header>
  );
};

export default Header;