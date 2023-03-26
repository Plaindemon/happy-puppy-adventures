import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../styles/ClientPaperwork.css";



function ClientPaperwork() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file="pdf/Pet-Info-2.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-container"
      >
        <Page pageNumber={pageNumber} className="pdf-page" />
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button className="pdf-button" onClick={() => previousPage()}>Previous</button>
        <button className="pdf-button" onClick={() => nextPage()}>Next</button>


      </Document>
    </>
  );
}

export default ClientPaperwork;
