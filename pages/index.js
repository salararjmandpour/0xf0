import { ThemeContext } from "../context/ThemeProvider";
import { CssBaseline, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { useContext, useMemo } from "react";
import Examples from "../components/Examples/Examples";
import Guide from "../components/Guide/Guide";
import Header from "../components/Header/Header";
import Introduction from "../components/Header/Introduction/Introduction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
export default function Home({ domain }) {
  const { state } = useContext(ThemeContext);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: state,
        },
      }),
    [state]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>وب‌سرویس شهر و استان‌های ایران</title>
        <meta
          name="description"
          content=".وب‌سرویس شهر و استان‌ و پیش شماره های ایران. با این سرویس می‌توانید به اطلاعات شهر و استان‌ و پیش شماره های ایران دسترسی پیدا کنید"
        />
        <meta name="keywords" content="وب سرویس, شهر, ایران, api" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Hamidreza Ramzani" />
        <meta
          name="google-site-verification"
          content="e-lqYCfqL9Ln30jqpJrH0hrJtDm2ytuv1GFXuyuR_dI"
        />

        <link
          rel="preload"
          href="/fonts/ttf/iranyekanwebmediumfanum.ttf"
          as="font"
          crossOrigin="true"
          type="font/ttf"
        />

        <link
          rel="preload"
          href="/fonts/ttf/iranyekanwebblackfanum.ttf"
          as="font"
          crossOrigin="true"
          type="font/ttf"
        />
        <link rel="icon" href="/logo.png" />

        <meta
          property="og:url"
          content="https://iran-locations-api.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="وب‌سرویس شهر و استان‌ پیش شماره های ایران"
        />
        <meta
          property="og:description"
          content=".وب‌سرویس شهر و استان‌های ایران. با این سرویس می‌توانید به اطلاعات شهر و استان‌های ایران دسترسی پیدا کنید"
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://my-0x0f.iran.liara.run/api/v1"
        />
        <meta
          property="twitter:url"
          content="https://iran-locations-api.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="وب‌سرویس شهر و استان‌ پیش شماره های ایران"
        />
        <meta
          name="twitter:description"
          content=".وب‌سرویس شهر و استان‌های ایران. با این سرویس می‌توانید به اطلاعات شهر و استان‌های ایران دسترسی پیدا کنید"
        />
        <meta name="twitter:image" content="" />
      </Head>
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
        container
        height="100vh"
        className={
          state === "light" ? styles.darkWelcome : styles.lightWelcome
        }>
        <Header />
        <Introduction />
      </Grid>
      <Examples domain={domain} />
      <Guide domain={"https://my-0x0f.iran.liara.run"} />
      <Footer />
    </ThemeProvider>
  );
}

export async function getServerSideProps({ req }) {
  const domain = req.headers.host;

  return { props: { domain } };
}
