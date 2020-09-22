import React from "react";

import "./{{componentName}}.scss";

interface I{{componentName}}Props {

}

const baseClass = "{{cssClass}}";

const {{componentName}} = ({}: I{{componentName}}Props) => {
  return (<div className={baseClass}>Hello world!</div>);
};

export default {{componentName}};
