import React from 'react';
import './SVGsList.css'
import svgPathBbox from "svg-path-bbox";

const SVGsList = ({feature, changeTypeSelected, changeSubsectionsSelected}) => {
  const calculateViewBox = (elementId) => {
    const el = document.getElementById(`${elementId}`);
    const d = el.getAttribute('d');
    if (d) {
      const bbox = svgPathBbox(d);
      return `${bbox[0] - 10} ${bbox[1] - 10} ${bbox[2] + 10} ${bbox[3] + 10}`
    }
    const r = el.getAttribute('r');
    if (r) {
      return `22 17 10 10`;
    }
    return "0 0 360 360";
  }

  const subsectionsMenu = () => {
    return (
      <ul className="children-menu">
        {feature.subsections.map((x,index)=><li key={index} className={`child-item ${x===feature.subsectionSelected?'selected':''}`} onClick={()=>changeSubsectionsSelected(x)}>{x}</li>)}
      </ul>
    )
  }
  if(feature.subsections) {
    const subsectionSelected = feature.subsectionSelected.split(' ').join('');
    const svgIds = Array.from(Array(feature[`nTypes${subsectionSelected}`]).keys()).map(x => `${subsectionSelected.toLowerCase()}-${++x}`)
    return (
      <div>
        {feature.subsections && subsectionsMenu()}
        <ul className='vectors-list'>
          <li className={`item empty ${feature[`${subsectionSelected.toLowerCase()}Type`] === '' ? 'selected':''}`} onClick={()=>changeTypeSelected('')}>
          <svg xmlns='http://www.w3.org/2000/svg' style={{stroke: "#949eab"}} width="100%" height="100%" viewBox="0 0 200 200">
            <path d="M64.6447 135.355C84.1709 154.881 115.829 154.881 135.355 135.355C154.882 115.829 154.882 84.1706 135.355 64.6444M64.6447 135.355C45.1184 115.829 45.1184 84.1706 64.6447 64.6444C84.1709 45.1182 115.829 45.1182 135.355 64.6444M64.6447 135.355L135.355 64.6444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </li>
          {
            svgIds.map((x, index)=><li key={x} className={`item ${x===feature[`${subsectionSelected.toLowerCase()}Type`] ? 'selected' : ''}`}  onClick={()=>changeTypeSelected(++index)}>
              <svg width="100%" height="100%" xmlns='http://www.w3.org/2000/svg' className={feature.subSectionsSelected} style={{fill: feature['fill'], stroke:"#b4bedb"}} viewBox={calculateViewBox(x)}>
                <use id={`use-${x}`} xlinkHref={`#${x}`} />
              </svg>
            </li>)
          }
        </ul>
      </div>
    )
  } else {
    const svgIds = Array.from(Array(feature.nTypes).keys()).map(x => `${feature.id}-${++x}`)
    return (
      <div>
        <ul className='vectors-list'>
          <li className={`item empty ${feature.typeSelected===''?'selected':''}`} onClick={()=>changeTypeSelected('')}>
          <svg xmlns='http://www.w3.org/2000/svg' style={{stroke: "#b4bedb"}} width="100%" height="100%" viewBox="0 0 200 200">
            <path d="M64.6447 135.355C84.1709 154.881 115.829 154.881 135.355 135.355C154.882 115.829 154.882 84.1706 135.355 64.6444M64.6447 135.355C45.1184 115.829 45.1184 84.1706 64.6447 64.6444C84.1709 45.1182 115.829 45.1182 135.355 64.6444M64.6447 135.355L135.355 64.6444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </li>
          {
            svgIds.map((x, index)=><li key={x} className={`item ${x===feature.typeSelected?'selected':''}`} onClick={()=>changeTypeSelected(++index)}>
              <svg width="100%" height="100%" xmlns='http://www.w3.org/2000/svg' className={feature.id} style={{fill: feature['fill'], stroke: "#b4bedb"}} viewBox={calculateViewBox(x)}>
                <use xlinkHref={`#${x}`} />
              </svg>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default SVGsList;
