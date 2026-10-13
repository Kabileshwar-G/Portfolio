import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { verificationMatrix } from '../data/verificationChecklist';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-bg-panel border border-border-medium rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-6 bg-bg-panel/95 backdrop-blur-md border-b border-border-subtle">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Engineering Ethics & Content Verification Matrix</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-fg">
              Claim Integrity & Source Verification
            </h2>
            <p className="text-xs font-mono text-fg-muted mt-0.5">
              Explicit audit tracking of academic records, performance benchmarks, and deployment boundaries.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-fg-muted hover:text-fg hover:bg-white/[0.05] transition-colors cursor-pointer"
            aria-label="Close verification matrix"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table / Cards */}
        <div className="p-6 space-y-4">
          <div className="p-4 rounded-xl bg-bg-darker/70 border border-border-subtle text-xs text-fg-muted leading-relaxed">
            <strong className="text-fg font-semibold font-mono block mb-1">
              Zero-Fabrication Commitment:
            </strong>
            Every metric, internship, and project featured on this portfolio derives directly from official records, local repositories, or verified simulation benchmarks. No production scale, revenue, or clinical patient outcomes are exaggerated.
          </div>

          <div className="space-y-3">
            {verificationMatrix.map((entry, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-bg-card border border-border-subtle flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs"
              >
                <div className="space-y-1 sm:max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-fg text-sm">
                      {entry.item}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      entry.status === 'Verified & Accurate'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : entry.status === 'Clearly Qualified (Simulation)'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {entry.status}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-fg-subtle">
                    Source: {entry.sourceOrigin}
                  </div>
                  <div className="font-mono text-gold-300 font-medium">
                    Published: {entry.verifiedValue}
                  </div>
                </div>

                <div className="sm:max-w-xs text-[11px] text-fg-muted bg-bg-panel p-2.5 rounded border border-border-subtle leading-relaxed">
                  <span className="text-gold-400 font-mono">Audit Note: </span>
                  {entry.notes}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-end p-4 bg-bg-panel/95 backdrop-blur-md border-t border-border-subtle">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono text-bg-darker bg-gold-400 hover:bg-gold-300 font-semibold cursor-pointer transition-colors"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
};
