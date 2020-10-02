import db from "../../firebase";
import React from "react";

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    db.doc(id).update({ archived: true });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};
