import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from 'react-pdf';
import './ComponentStyle.css'
import Carousel from 'react-bootstrap/Carousel';




pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PDFViewer({file}) {
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
       <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Carousel fade variant="dark" interval={null}>
        {Array.from(new Array(numPages), (el, index) => (
           <Carousel.Item key={el}>
              <div className="pdf-page-wrapper " >
              <Page scale='1' pageNumber={index + 1}  width={1000} />
              </div>
          </Carousel.Item>
          
        ))}
         </Carousel>
          </Document>

      
    </div>
  );
}
export default PDFViewer