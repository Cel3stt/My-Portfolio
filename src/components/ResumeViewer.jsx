import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useState } from "react";

// Set the workerSrc globally for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = async () => {
    const response = await fetch("/Celest_Jerez_Resume.pdf");
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "Celest_Jerez_Resume.pdf";
    link.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Button onClick={handleDownload} className="gap-2" size="sm">
        Download Resume <MoveRight className="w-4 h-4" />
      </Button>

      <Document
        file="/Celest_Jerez_Resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="border rounded shadow"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page pageNumber={index + 1} key={`page_${index + 1}`} />
        ))}
      </Document>
    </div>
  );
}
