import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

interface ClickableAvatarProps {
  src: string;
  alt: string;
  transitionDuration?: string;
}

export const ClickableAvatar: React.FC<ClickableAvatarProps> = ({ src, alt, transitionDuration = 'duration-500' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View larger ${alt}`}
        className={`group/avatar block relative w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all ${transitionDuration} cursor-zoom-in`}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/avatar:bg-black/40 transition-colors duration-300">
          <Maximize2 className="text-white opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300" size={20} strokeWidth={1.5} />
        </div>
      </button>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={src}
                alt={alt}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-[85vh] rounded-lg border border-white/10 object-contain shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
