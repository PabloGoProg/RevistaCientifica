import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import element from '../docs/algorithms.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export function File() {

    // número de paginas del documento
    const [numPages, setNumPages] = useState(null);

    // número de la página actual
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    /**
     * Se mueve a la página anterior del documento si la
     * página en la que esta no es la primera
     */
    const goToPrevPage = () => {
        event.preventDefault();
        setPageNumber(pageNumber - 1 >= 1 ? pageNumber - 1 : pageNumber);
    };

    const goToNextPage = () => {
        event.preventDefault();
        setPageNumber(pageNumber + 1 >= numPages ? pageNumber : pageNumber + 1);
    };

    return (
        <section className='file'>
            <nav>
                <button type='button' onClick={goToPrevPage}>Prev</button>
                <button type='button' onClick={goToNextPage}>Next</button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </nav>

            <section className='file-page'>
                <Document file={element} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page wrap={true} size='A4' pageNumber={pageNumber} />
                </Document>
            </section>
        </section>
    );
}