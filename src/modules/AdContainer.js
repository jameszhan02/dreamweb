import React, { Component } from "react";
import "./Ads.css";
const Ads = [
  {
    img:
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    imgalt: "",
    user: "Stephan Singh",
  },
  {
    img: "fdsf",
    imgalt: "",
    user: "Stephan Singh",
  },
  {
    img:
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    imgalt: "",
    user: "Stephan Singh",
  },
  {
    img:
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    imgalt: "",
    user: "Stephan Singh",
  },
];
class AdContainer extends Component {
  render() {
    return (
      <div className="list">
        {Ads.map((item, index) => {
          return (
            <div className="adsrow" key={index}>
              <img src={item.img} className="adscontext" alt={item.imgalt} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default AdContainer;
