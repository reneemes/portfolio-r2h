import "./resume.css";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function Resume() {
  return (
    <section className="resume">
      <h2 className="resume__title">Resume</h2>
      <a href="/assets/resume.pdf" target="_blank" className="resume__link">
        <Document 
          file="/assets/resume.pdf"
          onLoadError={console.error}
        >
          <Page pageNumber={1} width={350}/>
        </Document>
      </a>
    </section>
  )
}

export default Resume;