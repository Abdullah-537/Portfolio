"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;
const CURRENT_FRAME = (index: number) =>
  `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  const drawImageCover = useCallback((ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio) * 0.90; // zoomed out a little bit
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  }, []);

  const renderFrame = useCallback((index: number) => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (img && img.complete) {
      drawImageCover(ctx, img);
    }
  }, [images, drawImageCover]);

  useEffect(() => {
    const preloadImages = () => {
      const imgArray: HTMLImageElement[] = [];
      let loadedCount = 0;
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = CURRENT_FRAME(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setLoaded(true);
          }
        };
        imgArray.push(img);
      }
      setImages(imgArray);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
        canvasRef.current.height = canvasRef.current.parentElement.clientHeight;

        const currentFrameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        renderFrame(currentFrameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame, scrollYProgress]);

  // Initial draw once loaded
  useEffect(() => {
    if (loaded && images.length > 0) {
      const currentFrameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollYProgress.get() * FRAME_COUNT)
      );
      renderFrame(currentFrameIndex);
    }
  }, [loaded, renderFrame, images, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;
    const frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
    renderFrame(frameIndex);
  });

  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0f1e]">
      {!loaded && (
        <div className="flex items-center justify-center p-20 text-white/50 h-full w-full absolute inset-0 text-sm font-sans tracking-widest uppercase">
          Loading Cinematic Sequence...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
