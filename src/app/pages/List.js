import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import { fetchList } from "../redux/actions/ActionList";
import Skeleton from "../components/Skeleton";

import "./List.scss";

const List = ({ onFetchList, list }) => {
  useEffect(() => {
    if (!list) onFetchList();
  });

  const listCmp = (
    <ul>{list ? list.map((it) => <li key={it.id}>{it.name}</li>) : null}</ul>
  );

  return (
    <HelmetProvider>
      <Helmet>
        <title>Seed :: List</title>
      </Helmet>
      <div className="list">
        <h1>TODO List</h1>
        {!list ? <Skeleton multiply={2} /> : null}
        {listCmp}
      </div>
    </HelmetProvider>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, id: PropTypes.number })
  ),
  onFetchList: PropTypes.func.isRequired,
};

List.defaultProps = {
  list: null,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchList: () => dispatch(fetchList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
