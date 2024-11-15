import { useState } from "react";
import { Menu, MenuItem, Button, Link } from "@mui/material";
import { GithubOriginal } from "devicons-react";
import { githubAccounts } from "../../content/navbar.data";

const GitHubMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onMouseEnter={handleMouseEnter}
        variant="contained"
        color="info"
        sx={{ textTransform: "lowercase" }}
      >
        <GithubOriginal size={25} />
      </Button>
      <Menu
        id="github-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        MenuListProps={{
          onMouseEnter: () => setAnchorEl(anchorEl),
          onMouseLeave: handleMouseLeave,
        }}
      >
        {githubAccounts.map(({ href, label }) => (
          <MenuItem onClick={handleMouseLeave}>
            <Link href={href} target="_blank" rel="noopener" underline="none">
              {label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default GitHubMenu;
