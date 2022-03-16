import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/global.scss";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
