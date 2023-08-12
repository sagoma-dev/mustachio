import React from 'react';
import './Download.css';

const Download = () => {
  const selectDownload = (opcion)=> {
  }
  return <div className="download-wrapper">
    <h2>Mustachio</h2>
    <div className="download-button">
      <svg className="download-arrow" width="28" height="51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 0h-2.5v46.24L1.75 35 0 36.78 14 51l14-14.22L26.25 35 15.32 46.1V0z" fill="#000"/></svg>
      <span className="download-text">Download</span>
      <ul className="download-list">
        <li onClick={()=>selectDownload('JPG')}>JPG</li>
        <li onClick={()=>selectDownload('PNG')}>PNG</li>
        <li onClick={()=>selectDownload('SVG')}>SVG</li>
      </ul>
    </div>
    <p className="legal">This is a project by @samuel_mad, @reversotenebros, <a href="https://github.com/superalex" target="_blank">superalex</a> and @estdubois made during the piweek</p>
  </div>
}
export default Download;
