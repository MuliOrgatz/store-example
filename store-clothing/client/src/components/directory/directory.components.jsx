import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.components";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    <div className="row">
      {sections.slice(0, 3).map(({ id, ...otherSectionProp }) => (
        <MenuItem key={id} {...otherSectionProp} />
      ))}
    </div>
    <div className="row">
      {sections.slice(3).map(({ id, ...otherSectionProp }) => (
        <MenuItem key={id} {...otherSectionProp} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
