import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

import "./HomePageItems.css";

const save = [
  { name: "save1" },
  { name: "save2" },
  { name: "save3" },
  { name: "save4" },
  { name: "save5" },
  { name: "save6" },
  { name: "save7" },
  { name: "save8" },
  { name: "save9" },
  { name: "save10" },
  { name: "save11" },
  { name: "save12" },
  { name: "save13" },
];
const best = [
  { name: "best1" },
  { name: "best2" },
  { name: "best3" },
  { name: "best4" },
  { name: "best5" },
  { name: "best6" },
  { name: "best7" },
  { name: "best8" },
  { name: "best9" },
  { name: "best10" },
  { name: "best11" },
  { name: "best12" },
  { name: "best13" },
];

const MenuItem = ({ text }) => {
  return <div className="menu-item">{text}</div>;
};

export const SaveMenu = (save) =>
  save.map((item) => {
    const { name } = item;
    return <MenuItem text={name} key={name} />;
  });
  
export const BestMenu = (save) =>
  save.map((item) => {
    const { name } = item;
    return <MenuItem text={name} key={name} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

export default class HomePageItems extends Component {
  constructor(props) {
    super(props);
    this.saveItems = SaveMenu(save);
    this.bestItems = BestMenu(best);
  }

  render() {
    const save = this.saveItems;
    const best = this.bestItems;
    return (
      <div>
        <div className='save-container'>
          <p className='save-text'>SAVE MORE</p>
          <ScrollMenu
            data={save}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
          />
        </div>
        <div className='best-container'>
          <p className='best-text'>TOP SELLING WINES</p>
          <ScrollMenu
            data={best}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
          />
        </div>
      </div>
    );
  }
}
