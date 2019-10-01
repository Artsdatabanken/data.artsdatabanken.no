import React from "react";
import { Router, Route, browserHistory, Link } from "react-router";
import {
  createApp,
  withPhenomicApi,
  query
} from "@phenomic/preset-react-app/lib/client";
import Type from "./src/templates/type";

const Test = props => {
  if (!props.page.node) return null;
  const node = props.page.node;
  console.error("node", node);
  return <Type pageContext={node} />;
  return (
    <div>
      <h1>{props.page.node.kode}</h1> {JSON.stringify(props)};<h1>1_</h1>{" "}
      {JSON.stringify(props.page.node)};
    </div>
  );
};

const TestContainer = withPhenomicApi(Test, props => ({
  page: query({ path: "content/data", id: props.params.splat })
}));

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/*" component={TestContainer} />
  </Router>
));
