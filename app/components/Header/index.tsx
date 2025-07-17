"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./header.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogContent,
  List,
  ListItemText,
  Button,
  useMediaQuery,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isSignedIn =
    typeof window !== "undefined" && localStorage?.getItem("WebTradeToken");
  const isMobile = useMediaQuery("(max-width:1000px)");
  const menuItems: string[] = [
    "Projects",
    "Process",
    "Blogs",
    "Testimonials",
    "FAQs",
    "Contact Us",
  ];

  const Links: string[] = [
    "/",
    "/#how-it-works-section",
    "/#features-section",
    "/brokers",
    "/blogs",
  ];

  const handleNav = async (index: number) => {
    const scrollTargets = {
      1: "how-it-works-section",
      2: "features-section",
      4: "blog-section",
    } as Record<number, string>;

    const target = scrollTargets[index];

    if (target) {
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        // Scroll directly
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate then scroll via query
        await router.push(`/?scrollTo=${target}`);
      }
    } else {
      router.push(Links[index]);
    }

    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar
        className="toolbar"
        sx={{
          minHeight: 0,
          width: "100%",
          px: { xs: 0, sm: 0 },
        }}
      >
        <div className="navbar-section logo-left">
          <Image
            src="/praidux-logo.png"
            alt="Logo"
            width={83}
            height={28}
            className="w-[73px] h-auto"
          />
        </div>

        {isMobile ? (
          <div className="navbar-section mobile-menu-right">
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              className="menu-btn"
            >
              <MenuIcon />
            </IconButton>

            <Dialog
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              fullScreen
              hideBackdrop
              PaperProps={{
                sx: {
                  width: "calc(100% - 32px)",
                  height: "fit-content",
                  margin: "16px",
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "absolute",
                  top: "8%",
                  right: 0,
                },
              }}
            >
              <DialogContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  px: 4,
                  py: 3,
                  position: "relative",
                  padding: "20px",
                }}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem
                      component="button"
                      key={index}
                      onClick={() => handleNav(index)}
                      sx={{
                        paddingX: 0,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          // fontFamily: "Roboto",
                          fontSize: "18px",
                          color: "#1A202C",
                          paddingX: 0,
                        }}
                      />
                    </ListItem>
                  ))}

                  <ListItem sx={{ paddingX: 0 }}>
                    <Button
                      className="font-Pop"
                      variant="contained"
                      sx={{
                        borderRadius: "25px",
                        background: "#FF5F1F",
                        paddingX: "24px",
                        paddingY: "8px",
                        fontSize: "14px",
                        width: "fit-content",
                        textTransform: "none",
                        cursor:"pointer",
                        boxShadow: "none",
                        "&:hover": {
                          opacity: 0.95,
                          background: "#FF5F1F",
                        },
                      }}
                      // onClick={() => {
                      //   router.push(isSignedIn ? "/dashboard" : "/login");
                      // }}
                    >
                      Contact Us
                    </Button>
                  </ListItem>
                </List>
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <>
            <div className="centerdiv">
              {menuItems.map((item, index) => (
                <p
                  key={index}
                  className="navbar-items font-roboto font-normal hover:font-semibold"
                  onClick={() => handleNav(index)}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="navbar-section login-right">
              <button className="login-button cursor-pointer">Contact Us</button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
