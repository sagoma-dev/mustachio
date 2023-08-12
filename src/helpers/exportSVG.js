const WIDTH = 360;
const HEIGHT = 360;

const exportSVG = (state, type) => {
  const svgDefs = document.getElementById('defs').cloneNode(true);
  const box = document.getElementById('svg-canvas').getBBox();
  const svgExport = document.getElementById('svg-canvas').cloneNode(true);
  svgExport.prepend(svgDefs);

  const canvas = document.createElement('canvas')

  canvas.setAttribute("width", WIDTH);
  canvas.setAttribute("height", HEIGHT);

  function triggerDownload (imgURI, fileName) {
    const evt = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true
    });
    const a = document.createElement("a");
    a.setAttribute("download", fileName);
    a.setAttribute("href", imgURI);
    a.setAttribute("target", '_blank');
    a.dispatchEvent(evt);
  }

const svgString = new XMLSerializer().serializeToString(svgExport);
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, WIDTH, HEIGHT);

const img = new Image();
img.setAttribute("width", WIDTH);
img.setAttribute("height", HEIGHT);
var format;

const blob = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
const svgURL = URL.createObjectURL(blob);

if(type==="PNG") {
  format = "image/png";
  img.onload = function() {
      ctx.drawImage(img, 0, 0, 360, 360);
      const png = canvas.toDataURL("image/png");
      triggerDownload(png, "avatar.png")
      URL.revokeObjectURL(png);
  };
}
else if(type==="JPG") {
  format = "image/jpeg";
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    const jpg = canvas.toDataURL("image/jpeg");
    triggerDownload(jpg, "avatar.jpg")
    URL.revokeObjectURL(jpg);
  }
}
else if(type==="SVG") {
  const svgURL = URL.createObjectURL(blob);
  img.onload = function() {
    triggerDownload(svgURL, "avatar.svg")
    URL.revokeObjectURL(svgURL);
  }
}
img.src = svgURL;
}

export default exportSVG;