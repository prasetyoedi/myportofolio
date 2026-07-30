import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { AnimatedSection } from "../AnimatedSection";
import { data } from "../../data";
import {
    Award,
    X,
    ExternalLink,
    FileText,
    Loader2,
    ZoomIn,
    ZoomOut,
    RotateCcw,
    Download,
    ChevronLeft,
    ChevronRight,
    Printer,
    Maximize2,
    Minimize2,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [zoomLevel, setZoomLevel] = useState(1.0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const openLightbox = (cert) => {
        setSelectedCert(cert);
        setZoomLevel(1.0);
        setPageNumber(1);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedCert(null);
        document.body.style.overflow = "";
        setNumPages(null);
        setPageNumber(1);
        setZoomLevel(1.0);
        if (isFullscreen) {
            document.exitFullscreen?.();
            setIsFullscreen(false);
        }
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const goToPrevPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
    };

    const handleZoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 0.15, 2.5));
    };

    const handleZoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 0.15, 0.5));
    };

    const handleResetZoom = () => {
        setZoomLevel(1.0);
    };

    const handleDownload = () => {
        if (selectedCert?.pdf) {
            const link = document.createElement("a");
            link.href = selectedCert.pdf;
            link.download = `${selectedCert.name.replace(/\s+/g, "_")}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handlePrint = () => {
        if (selectedCert?.pdf) {
            window.open(selectedCert.pdf, "_blank")?.print();
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen?.();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen?.();
            setIsFullscreen(false);
        }
    };

    const getPageWidth = () => {
        const baseWidth = Math.min(700, window.innerWidth - 80);
        return baseWidth * zoomLevel;
    };

    return (
        <>
            <section id="certificates" className="py-24 px-5 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <AnimatedSection>
                        <h2 className="section-title gradient-text text-center">Certifications</h2>
                        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
                            Professional certifications that validate my skills and expertise.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.certifications.map((cert, idx) => (
                            <AnimatedSection key={idx} delay={idx * 80}>
                                <div
                                    className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_-12px_rgba(59,130,246,0.15)] cursor-pointer group"
                                    onClick={() => cert.pdf && openLightbox(cert)}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5 flex items-center justify-center">
                                        {cert.pdf ? (
                                            <>
                                                <Document
                                                    file={cert.pdf}
                                                    loading={
                                                        <div className="flex flex-col items-center gap-2 text-gray-500">
                                                            <Loader2 size={32} className="animate-spin text-blue-400" />
                                                            <span className="text-xs">Loading PDF...</span>
                                                        </div>
                                                    }
                                                    error={
                                                        <div className="flex flex-col items-center gap-2 text-gray-500">
                                                            <FileText size={32} className="text-red-400" />
                                                            <span className="text-xs">Failed to load</span>
                                                        </div>
                                                    }
                                                >
                                                    <Page
                                                        pageNumber={1}
                                                        width={300}
                                                        renderTextLayer={false}
                                                        renderAnnotationLayer={false}
                                                        className="transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </Document>

                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="p-3 rounded-full glass text-white">
                                                        <ExternalLink size={24} />
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-2 right-2 z-10">
                                                    <span className="text-[8px] uppercase tracking-wider px-2 py-1 rounded-full bg-red-500/80 text-white border border-white/20 flex items-center gap-1">
                                                        <FileText size={10} /> PDF
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center gap-2 text-gray-500">
                                                <Award size={40} className="text-blue-400/30" />
                                                <span className="text-xs">No PDF</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <h4 className="font-semibold text-white text-sm leading-tight line-clamp-2">
                                            {cert.name}
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-xs text-blue-400 font-medium px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                                {cert.year}
                                            </span>
                                            {cert.pdf && (
                                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                                    Click to view <ExternalLink size={12} />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== LIGHTBOX dengan TOOLBAR DI BAWAH (seperti browser) ===== */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
                        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)" }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* === HEADER: Judul + Close === */}
                            <div className="flex-shrink-0 flex items-center justify-between p-3 glass border-b border-white/5">
                                <div className="flex items-center gap-3 min-w-0">
                                    <FileText size={18} className="text-blue-400 flex-shrink-0" />
                                    <span className="text-sm font-medium text-white truncate">
                                        {selectedCert.name}
                                    </span>
                                    <span className="text-xs text-gray-500 hidden sm:inline">
                                        {selectedCert.issuer} · {selectedCert.year}
                                    </span>
                                </div>
                                <button
                                    onClick={closeLightbox}
                                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex-shrink-0"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* === PDF VIEWER === */}
                            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-blue-500/30 scrollbar-track-transparent">
                                <div className="flex flex-col items-center gap-4">
                                    {selectedCert.pdf && (
                                        <Document
                                            file={selectedCert.pdf}
                                            onLoadSuccess={onDocumentLoadSuccess}
                                            loading={
                                                <div className="flex flex-col items-center gap-3 py-12">
                                                    <Loader2 size={48} className="animate-spin text-blue-400" />
                                                    <p className="text-gray-400">Loading PDF...</p>
                                                </div>
                                            }
                                            error={
                                                <div className="flex flex-col items-center gap-3 py-12">
                                                    <FileText size={48} className="text-red-400" />
                                                    <p className="text-gray-400">Failed to load PDF</p>
                                                </div>
                                            }
                                        >
                                            <Page
                                                pageNumber={pageNumber}
                                                width={getPageWidth()}
                                                renderTextLayer={false}
                                                renderAnnotationLayer={false}
                                                className="shadow-2xl rounded-lg transition-all duration-300"
                                            />
                                        </Document>
                                    )}
                                </div>
                            </div>

                            {/* === TOOLBAR DI BAWAH (seperti browser) === */}
                            <div className="flex-shrink-0 flex flex-wrap items-center justify-center gap-2 p-3 glass border-t border-white/5">
                                {/* Left: Page Navigation */}
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={goToPrevPage}
                                        disabled={pageNumber <= 1}
                                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                                        aria-label="Previous page"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <span className="text-xs text-gray-400 min-w-[70px] text-center font-medium">
                                        {numPages ? `${pageNumber} / ${numPages}` : "Loading..."}
                                    </span>
                                    <button
                                        onClick={goToNextPage}
                                        disabled={pageNumber >= numPages}
                                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                                        aria-label="Next page"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>

                                <div className="w-px h-6 bg-white/10 hidden sm:block" />

                                {/* Center: Zoom Controls */}
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={handleZoomOut}
                                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                        aria-label="Zoom out"
                                    >
                                        <ZoomOut size={16} />
                                    </button>
                                    <span className="text-xs text-gray-400 min-w-[40px] text-center font-medium">
                                        {Math.round(zoomLevel * 100)}%
                                    </span>
                                    <button
                                        onClick={handleZoomIn}
                                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                        aria-label="Zoom in"
                                    >
                                        <ZoomIn size={16} />
                                    </button>
                                    <button
                                        onClick={handleResetZoom}
                                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                        aria-label="Reset zoom"
                                    >
                                        <RotateCcw size={14} />
                                    </button>
                                </div>

                                <div className="w-px h-6 bg-white/10 hidden sm:block" />

                                {/* Right: Actions */}
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={handlePrint}
                                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                        aria-label="Print"
                                    >
                                        <Printer size={16} />
                                    </button>
                                    <button
                                        onClick={toggleFullscreen}
                                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                        aria-label="Fullscreen"
                                    >
                                        {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors text-xs font-medium"
                                        aria-label="Download PDF"
                                    >
                                        <Download size={14} />
                                        Download
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}