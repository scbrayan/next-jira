import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import { Nabvar, Sidebar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;
export const Layout: FC<Props> = ({ children, title = "OpenJira" }) => {
  return (
    <>
      <Box sx={{ flexFlow: 1 }}>
        <Head>
          <title> {title}</title>
          <meta name="author" content="Brayan Saborio"></meta>
          <meta name="description" content={`${title}`}></meta>
          <meta name="keywords" content={`${title}`}></meta>
        </Head>
        <Nabvar />
        <Sidebar />
        <Box sx={{ padding: "10px 20px" }}>{children}</Box>
      </Box>
    </>
  );
};
