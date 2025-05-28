import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { pdfjs } from 'react-pdf';
import './ComponentStyle.css'


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PDFViewer() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess =({ numPages })=> {
    setNumPages(numPages);
  }

  const HandelNext=()=>{
    setPageNumber(pageNumber+1)
  }
  const HandelBack=()=>{
    setPageNumber(pageNumber-1)
  }
  
  return (
    <div> 
      <Card className="mx-1" bg="info">
        <Card.Body>
          <Card.Title>
            صفحة   
            {' '}{pageNumber} {' '}
            من 
            {' '}{numPages}
          </Card.Title>
          <Document file="use.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <div className="pdf-page-wrapper" >
            <Page scale='1' pageNumber={pageNumber} width='1000' />
            </div>
          </Document>
          <Button className="m-1" variant="success" onClick={HandelNext} disabled={pageNumber>=numPages}>next</Button>
          <Button className="m-1" variant="primary" onClick={HandelBack} disabled={pageNumber===1} >Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default PDFViewer