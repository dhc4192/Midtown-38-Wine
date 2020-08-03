import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import SampleWine from '../Assets/sample-wine.png'

import "./HomePageItems.css";

const list = [
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
  { name: <img src={SampleWine} alt=""/> },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text }) => {
  return <div className='menu-item'>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name}/>;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

export default class HomePageItems extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(list);
  }

  render() {
    // Create menu from items
    const menu = this.menuItems;
    return (
      <div>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
        />
      </div>
    );
  }
}
