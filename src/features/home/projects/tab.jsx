import * as React from "react";
import classNames from "classnames";

export default function Tab(props) {
  const { tab } = props;
  const cn = classNames("tags my-2 mb-md-0 mb-lg-0", {
    "bg-dark bg-opacity-75 text-white": active === ta
  });

  const HandleSelection = () => {
    setActive(tab);
    if (tab === 'all') return setSelected(projects);
    const all = projects.filter(project => project.tags.includes(tab));
    return setSelected(all);
  }

  return (
    <p className={cn} key={index} onClick={HandleSelection}>
      {tab}
    </p>
  )
}

