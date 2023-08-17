import { Button, ButtonGroup, Grid } from "@mui/material";
import React from "react";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
const SocialMediaList = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="10px">
      <ButtonGroup variant="text" color="inherit" sx={{ direction: "ltr" }}>
        <Button>
          <Link href="https://twitter.com/iamhamidreza_">
            <TwitterIcon />
          </Link>
        </Button>
        <Button>
          <Link href="https://github.com/hamidrezaramzani">
            <GitHubIcon />
          </Link>
        </Button>
        <Button>
          <Link href="https://t.me/hamidrezaramzani">
            <TelegramIcon />
          </Link>
        </Button>
      </ButtonGroup>
      <a href="https://daramet.com/salararjmand">
        <img src="/donation.png" width="160px" />
      </a>
    </Grid>
  );
};

export default SocialMediaList;
