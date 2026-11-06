import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import {
  X,
  ExternalLink,
  FileText,
  Loader2,
  ZoomIn,
  ZoomOut,
  Download,
  ChevronLeft,
  ChevronRight,
  Trophy,
  ShieldCheck,
} from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1.0);

  const openLightbox = (cert) => {
    setSelectedCert(cert);
    setZoomLevel(1.0);
    setPageNumber(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedCert(null);
    document.body.style.overflow = '';
    setNumPages(null);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <>
      <section
        id="credentials"
        className="py-24 px-5 relative overflow-hidden"
        style={{
          background: 'var(--ocean-credentials)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
                Honors, Awards &amp; Certifications
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-400">
                Nationally verified competencies by BNSP and ministry-level achievements at PIMNAS.
              </p>
            </div>
          </AnimatedSection>

          {/* National Awards Showcase */}
          <div className="mb-14">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-800 dark:text-cyan-400 font-bold mb-6 flex items-center gap-2">
              <Trophy size={16} />
              <span>National Competition Awards</span>
            </h3>

            <div className="grid sm:grid-cols-3 gap-5">
              {data.achievements.map((ach, idx) => (
                <AnimatedSection key={ach.title} delay={idx * 80}>
                  <div
                    onClick={() => ach.pdf && openLightbox({ name: ach.title, issuer: ach.issuer, year: ach.year, pdf: ach.pdf })}
                    className={`ocean-card p-6 rounded-2xl h-full flex flex-col justify-between ${
                      ach.pdf ? 'cursor-pointer hover:border-cyan-600 dark:hover:border-cyan-500/40' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">
                          {idx === 0 ? '🥈' : idx === 1 ? '🥇' : '🥉'}
                        </span>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/25 font-bold">
                          {ach.year}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm mb-1">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-cyan-800 dark:text-cyan-400 font-mono mb-2 font-medium">
                        {ach.event}
                      </p>
                      <p className="text-xs text-slate-700 dark:text-slate-400">
                        {ach.issuer}
                      </p>
                    </div>

                    {ach.pdf && (
                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-cyan-800 dark:text-cyan-400 font-bold">
                        <span>View Certificate</span>
                        <ExternalLink size={12} />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* BNSP & Industry Certifications */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-teal-800 dark:text-teal-400 font-bold mb-6 flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>BNSP &amp; Professional Certifications</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.certifications.map((cert, idx) => (
                <AnimatedSection key={cert.id} delay={idx * 60}>
                  <div
                    onClick={() => cert.pdf && openLightbox({ name: cert.title, issuer: cert.issuer, year: cert.period, pdf: cert.pdf })}
                    className="ocean-card p-5 rounded-2xl flex flex-col justify-between h-full cursor-pointer hover:border-teal-600 dark:hover:border-teal-500/40 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-white/[0.06] font-semibold">
                          {cert.id}
                        </span>
                        <span className="font-mono text-[10px] text-teal-800 dark:text-teal-300 font-bold">
                          {cert.period}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-slate-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors font-medium">
                      <span className="flex items-center gap-1.5">
                        <FileText size={13} />
                        <span>Inspect PDF</span>
                      </span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox PDF Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-5"
            style={{
              background: 'rgba(0, 5, 12, 0.85)',
              backdropFilter: 'blur(20px)',
            }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[92vh] rounded-2xl overflow-hidden flex flex-col bg-white dark:bg-[#020b17] border border-slate-300 dark:border-cyan-500/25 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-3.5 bg-slate-100 dark:bg-[#031122] border-b border-slate-300 dark:border-cyan-500/15">
                <div className="flex items-center gap-2.5 min-w-0">
                  <FileText size={18} className="text-cyan-700 dark:text-cyan-400 shrink-0" />
                  <span className="text-sm font-bold text-slate-950 dark:text-white truncate">
                    {selectedCert.name}
                  </span>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 hidden sm:inline">
                    · {selectedCert.issuer} ({selectedCert.year})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={closeLightbox}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Document Container */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center bg-slate-100 dark:bg-[#010610]">
                {selectedCert.pdf && (
                  <Document
                    file={selectedCert.pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                      <div className="flex flex-col items-center gap-3 py-20 text-slate-600">
                        <Loader2 size={36} className="animate-spin text-cyan-600" />
                        <span className="text-xs font-mono">Loading credential...</span>
                      </div>
                    }
                    error={
                      <div className="py-20 text-center text-rose-600 text-xs font-mono">
                        Failed to render document preview.
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={zoomLevel}
                      width={Math.min(window.innerWidth - 60, 720)}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="rounded-lg shadow-xl overflow-hidden"
                    />
                  </Document>
                )}
              </div>

              {/* Footer Controls */}
              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-[#031122] border-t border-slate-300 dark:border-cyan-500/15 font-mono text-xs">
                {/* Page Navigation */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                    disabled={pageNumber <= 1}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-white/[0.06] disabled:opacity-30 text-slate-800 dark:text-slate-300 font-bold"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-slate-700 dark:text-slate-400 min-w-[60px] text-center font-medium">
                    {pageNumber} / {numPages || 1}
                  </span>
                  <button
                    onClick={() => setPageNumber((p) => Math.min(numPages || 1, p + 1))}
                    disabled={pageNumber >= (numPages || 1)}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-white/[0.06] disabled:opacity-30 text-slate-800 dark:text-slate-300 font-bold"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-white/[0.06] text-slate-800 dark:text-slate-300"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-slate-700 dark:text-slate-400 font-bold">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(2.0, z + 0.15))}
                    className="p-1 rounded hover:bg-slate-200 dark:hover:bg-white/[0.06] text-slate-800 dark:text-slate-300"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                {/* Direct Download */}
                <a
                  href={selectedCert.pdf}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-600 dark:bg-cyan-500/15 text-white dark:text-cyan-300 border border-transparent dark:border-cyan-500/30 hover:bg-cyan-700 dark:hover:bg-cyan-500/25 transition-colors font-semibold"
                >
                  <Download size={13} />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
