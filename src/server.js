import express from "express";
import path from "path";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import mustacheExpress from "mustache-express";
import routes from "./app/routes/routes";
import Layout from "./app/components/Layout/Layout";
import configureStore from './app/redux/store/ConfigureStore';
import api from "./api";

const APP_URL = process.env.APP_URL ? process.env.APP_URL : "localhost";
const APP_CONTEXT_PATH = process.env.APP_CONTEXT_PATH
  ? process.env.APP_CONTEXT_PATH
  : "";
const APP_PORT = process.env.APP_PORT ? process.env.APP_PORT : 9000;

const app = express();

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", path.resolve(__dirname, "../dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
app.use(`${APP_CONTEXT_PATH}/api`, api);
app.use(
  `${APP_CONTEXT_PATH}/static`,
  express.static(path.resolve(__dirname, "../dist"))
);
app.use(
  `${APP_CONTEXT_PATH}/static`,
  express.static(path.resolve(__dirname, "../public"))
);

app.get("*", (req, res) => {
  const context = {};
  const store = configureStore({});

  const dataRequirements = routes
    .filter((route) => matchPath(req.url, route)) // filter matching paths
    .map((route) => route.component) // map to components
    .filter((comp) => comp.serverFetch) // check if components have data requirement
    .map((comp) => store.dispatch(comp.serverFetch(req))); // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
    const helmetContext = {};
    const jsx = (
      <HelmetProvider context={helmetContext}>
        <ReduxProvider store={store}>
          <StaticRouter context={context} location={req.url}>
            <Layout />
          </StaticRouter>
        </ReduxProvider>
      </HelmetProvider>
    );

    const reactDom = renderToString(jsx);
    const reduxState = store.getState();
    const { helmet } = helmetContext;

    res.render(`index.html`, {
      reduxState: JSON.stringify(reduxState),
      reactDom,
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
    });
  });
});

app.listen(APP_PORT, () =>
  console.log(`Listen on port ${APP_URL}:${APP_PORT}${APP_CONTEXT_PATH}`)
);
