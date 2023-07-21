import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

const PdfViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div>
      <Document file="../../Images/react.pdf">
        <Page pageNumber={1} width={800} />
      </Document>
      <a href="../../Images/react.pdf" target="_blank" rel="noopener noreferrer">
        <button>Download PDF</button>
      </a>
    </div>
  );
};

export default PdfViewer;
