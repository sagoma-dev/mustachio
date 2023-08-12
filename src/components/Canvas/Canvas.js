import React from 'react';
import './Canvas.css';
import ClickArea from '../ClickArea/ClickArea'
import {useSelector} from 'react-redux'
import Header from '../Header/Header'

const Canvas = ({sectionSelected, setSectionSelected}) => {
  const state = useSelector(state=>state)
  return (
    <div className="container-canvas">
      <Header />
      <div className="container-canvas">
        {!(sectionSelected==="background") && <ClickArea sectionSelected={sectionSelected}/>}
        <div className="canvas">
          <svg id="svg-canvas" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 360 360" style={{backgroundColor: state.background.color ? state.background.color:"#ebeef4"}}>
            {<>
              <g >
                <use xlinkHref={`#hairstyle-${state.hairstyle.type}`} style={{fill:state.hairstyle.color, stroke:"none"}} transform={`traslateY(-${state.hairstyle.position})`}/>
              </g>
              <g>
                <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none"}} transform={`scale(${state.ears.scale}) translate(${-1*state.ears.position.x}, ${state.ears.position.y})`} />
                <use xlinkHref={`#ears-${state.ears.type}`} style={{fill:state.ears.color, stroke:"none"}} transform={`scale(-${state.ears.scale},${state.ears.scale}) translate(${-1*(360+state.ears.position.x)}, ${state.ears.position.y})`}/>
              </g>

              <g>
                <use xlinkHref={`#fringe-${state.fringe.type}`} style={{fill:state.fringe.color, stroke:"none"}} />
                <use xlinkHref={`#wrinklesforehead-${state.wrinkles.wrinklesforeheadType}`} style={{stroke:state.wrinkles.wrinklesforeheadColor, "strokeWidth": state.wrinkles.wrinklesforeheadWidth, fill:"none"}} transform={`translate(${state.wrinkles.wrinklesforeheadPosition.x}, ${state.wrinkles.wrinklesforeheadPosition.y})`}/>
                <use xlinkHref={`#wrinklesforehead-${state.wrinkles.wrinklesforeheadType}`} style={{stroke:state.wrinkles.wrinklesforeheadColor, "strokeWidth": state.wrinkles.wrinklesforeheadWidth, fill:"none"}} transform={`translate(${360-state.wrinkles.wrinklesforeheadPosition.x}, ${state.wrinkles.wrinklesforeheadPosition.y}) scale(-1, 1)`} />
              </g>

              <g>
                <use xlinkHref={`#jawline-${state.jawline.type}`} style={{fill:state.jawline.color, stroke:"none"}} />
                <use xlinkHref={`#wrinkleschin-${state.wrinkles.wrinkleschinType}`} style={{stroke:state.wrinkles.wrinkleschinColor, "strokeWidth": state.wrinkles.wrinklescheekbonesWidth, fill:"none"}} transform={`translate(${state.wrinkles.wrinkleschinPosition.x}, ${state.wrinkles.wrinkleschinPosition.y})`} />
                <use xlinkHref={`#wrinkleschin-${state.wrinkles.wrinkleschinType}`} style={{stroke:state.wrinkles.wrinkleschinColor, "strokeWidth": state.wrinkles.wrinklescheekbonesWidth, fill:"none"}} transform={`translate(${360-state.wrinkles.wrinkleschinPosition.x}, ${state.wrinkles.wrinkleschinPosition.y}) scale(-1, 1)`} />
                <use xlinkHref={`#wrinklescheekbones-${state.wrinkles.wrinklescheekbonesType}`} style={{stroke:state.wrinkles.wrinklescheekbonesColor, "strokeWidth": state.wrinkles.wrinklescheekbonesWidth, fill:"none"}} transform={`translate(${state.wrinkles.wrinklescheekbonesPosition.x}, ${state.wrinkles.wrinklescheekbonesPosition.y})`} />
                <use xlinkHref={`#wrinklescheekbones-${state.wrinkles.wrinklescheekbonesType}`} style={{stroke:state.wrinkles.wrinklescheekbonesColor, "strokeWidth": state.wrinkles.wrinklescheekbonesWidth, fill:"none"}} transform={`translate(${360-state.wrinkles.wrinklescheekbonesPosition.x}, ${state.wrinkles.wrinklescheekbonesPosition.y}) scale(-1, 1)`} />
              </g>

              <g>
                <use xlinkHref={`#wrinklesmouth-${state.wrinkles.wrinklesmouthType}`} style={{stroke:state.wrinkles.wrinklesmouthColor, "strokeWidth": state.wrinkles.wrinklesmouthWidth, fill:"none"}} transform={`translate(${state.wrinkles.wrinklesmouthPosition.x}, ${state.wrinkles.wrinklesmouthPosition.y})`} />
                <use xlinkHref={`#wrinklesmouth-${state.wrinkles.wrinklesmouthType}`} style={{stroke:state.wrinkles.wrinklesmouthColor, "strokeWidth": state.wrinkles.wrinklesmouthWidth, fill:"none"}} transform={`translate(${360-state.wrinkles.wrinklesmouthPosition.x}, ${state.wrinkles.wrinklesmouthPosition.y}) scale(-1, 1)`} />
              </g>

              <g transform={`scale(${state.mouth.scale}, ${state.mouth.scale}) translate(${-1*state.mouth.position.x}, ${state.mouth.position.y})`}>
                <use xlinkHref={`#lowerlip-${state.mouth.lowerlipType}`} style={{fill:state.mouth.lowerlipColor, stroke:"none"}} />
                <use xlinkHref={`#upperlip-${state.mouth.upperlipType}`} style={{fill:state.mouth.upperlipColor, stroke:"none"}} />
                <use xlinkHref={`#smile-${state.mouth.smileType}`} style={{stroke:state.mouth.smileColor, "strokeWidth": state.mouth.smileWidth, fill:"none"}} />
              </g>

              <g transform={`rotate(${state.facialhair.rotate}, ${state.facialhair.position.x}, ${state.facialhair.position.y}) scale(${state.facialhair.scale}) translate(${state.facialhair.position.x}, ${state.facialhair.position.y})`}>
                <use xlinkHref={`#beard-${state.facialhair.beardType}`} style={{fill:state.facialhair.beardColor, stroke:"none"}} />
              </g>

              <g transform={`rotate(${state.facialhair.rotate}, ${state.facialhair.position.x}, ${state.facialhair.position.y}) scale(${state.facialhair.scale}) translate(${state.facialhair.position.x + 18}, ${state.facialhair.position.y + 32})`}>
                <use xlinkHref={`#mustachio-${state.facialhair.mustachioType}`} style={{fill:state.facialhair.mustachioColor, stroke:"none"}} />
              </g>

              <g transform={`rotate(${state.facialhair.rotate}, ${state.facialhair.position.x}, ${state.facialhair.position.y}) scale(-${state.facialhair.scale}, ${state.facialhair.scale}) translate(${-1*(360-state.facialhair.position.x - 18)}, ${state.facialhair.position.y + 32})`}>
                <use xlinkHref={`#mustachio-${state.facialhair.mustachioType}`} style={{fill:state.facialhair.mustachioColor, stroke:"none"}} />
              </g>

              <g transform={`rotate(${state.nose.rotate} ${state.nose.position.x} ${state.nose.position.y}) scale(${state.nose.scale}) translate(${state.nose.position.x}, ${state.nose.position.y})`}>
                <use xlinkHref={`#septum-${state.nose.septumType}`} style={{stroke:state.nose.septumColor, "strokeWidth": state.nose.septumWidth, fill:"none"}} />
                <use xlinkHref={`#nostrils-${state.nose.nostrilsType}`} style={{stroke:state.nose.nostrilsColor, "strokeWidth": state.nose.nostrilsWidth, fill:"none"}} />
              </g>

              <g>
                <use xlinkHref={`#wrinkleseyes-${state.wrinkles.wrinkleseyesType}`} style={{stroke:state.wrinkles.wrinkleseyesColor, "strokeWidth": state.wrinkles.wrinkleseyesWidth, fill:"none"}} transform={`translate(${state.wrinkles.wrinkleseyesPosition.x}, ${state.wrinkles.wrinkleseyesPosition.y})`}/>
                <use xlinkHref={`#wrinkleseyes-${state.wrinkles.wrinkleseyesType}`} style={{stroke:state.wrinkles.wrinkleseyesColor, "strokeWidth": state.wrinkles.wrinkleseyesWidth, fill:"none"}}  transform={`translate(${360 - state.wrinkles.wrinkleseyesPosition.x}, ${state.wrinkles.wrinkleseyesPosition.y})scale(-1, 1)`}/>
              </g>

              <g transform={`scale(${state.eyes.scale}) translate(${-1*state.eyes.position.x}, ${state.eyes.position.y})`}>
                <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.eyes.eyelashesWidth, fill:"none"}} />
              </g>

              <g transform={`scale(-${state.eyes.scale}, ${state.eyes.scale}) translate(${-1*(360 + state.eyes.position.x)}, ${state.eyes.position.y})`}>
                <use xlinkHref={`#white-${state.eyes.whiteType}`} style={{fill:state.eyes.whiteColor, stroke:"none"}} />
                <use xlinkHref={`#iris-${state.eyes.irisType}`} style={{fill:state.eyes.irisColor, stroke:"none"}} />
                <use xlinkHref={`#pupil-${state.eyes.pupilType}`} style={{fill:state.eyes.pupilColor, stroke:"none"}} />
                <use xlinkHref={`#eyelid-${state.eyes.eyelidType}`} style={{fill:state.eyes.eyelidColor, stroke:"none"}} />
                <use xlinkHref={`#eyelashes-${state.eyes.eyelashesType}`} style={{stroke:state.eyes.eyelashesColor, "strokeWidth": state.eyes.eyelashesWidth, fill:"none"}} />
              </g>

              <g>
                <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{fill:state.eyebrows.color, stroke:"none"}} transform={`scale(${state.eyebrows.scale}) translate(${-1*state.eyebrows.position.x}, ${state.eyebrows.position.y})`} />
                <use xlinkHref={`#eyebrows-${state.eyebrows.type}`} style={{fill:state.eyebrows.color, stroke:"none"}} transform={`scale(-${state.eyebrows.scale},${state.eyebrows.scale}) translate(${-1*(360+state.eyebrows.position.x)}, ${state.eyebrows.position.y})`} />
              </g>

              <g>
                <use xlinkHref={`#glasses-${state.glasses.type}`} style={{fill:state.glasses.color, stroke:"none"}} transform={`scale(${state.glasses.scale}) translate(${-1*state.glasses.position.x}, ${state.glasses.position.y})`}/>
                <use xlinkHref={`#glasses-${state.glasses.type}`} style={{fill:state.glasses.color, stroke:"none"}} transform={`scale(-${state.glasses.scale},${state.glasses.scale}) translate(${-1*(360+state.glasses.position.x)}, ${state.glasses.position.y})`}/>
              </g>

            </>}
          </svg>
        </div>
        </div>
      </div>
  )
}

export default Canvas;
