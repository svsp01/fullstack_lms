import React from 'react';

function PdfMaterial() {
  const pdfUrl = "../../Images/Begin.pdf";

  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "your_pdf.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <embed src={pdfUrl} type="application/pdf" width="400px" height="400px" />
      <button onClick={handleDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default PdfMaterial;
