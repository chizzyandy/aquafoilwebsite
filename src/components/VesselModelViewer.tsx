'use client';

import { useEffect, useState } from 'react';

const MODEL_SRC = '/models/aquafoil-vessel.glb';

export default function VesselModelViewer() {
  const [viewerState, setViewerState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let isMounted = true;

    import('@google/model-viewer')
      .then(() => {
        if (isMounted) {
          setViewerState('ready');
        }
      })
      .catch(() => {
        if (isMounted) {
          setViewerState('error');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <figure className="reveal reveal-delay-1">
      <div className="aspect-[3/4] bg-slate/20 relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,191,179,0.18),transparent_42%),linear-gradient(180deg,rgba(44,49,64,0.42),rgba(12,13,16,0.16))]" />

        {viewerState === 'ready' ? (
          <model-viewer
            src={MODEL_SRC}
            alt="Interactive 3D concept model of the aQuaFoil foiling Moth vessel"
            camera-controls
            auto-rotate
            auto-rotate-delay="1400"
            rotation-per-second="16deg"
            camera-orbit="38deg 66deg 5.4m"
            min-camera-orbit="auto 45deg 3.2m"
            max-camera-orbit="auto 82deg 7.5m"
            field-of-view="28deg"
            exposure="0.9"
            shadow-intensity="0.7"
            shadow-softness="0.85"
            environment-image="neutral"
            interaction-prompt="auto"
            touch-action="pan-y"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
            <div>
              <p className="text-label text-signal mb-2">
                {viewerState === 'error' ? 'Model unavailable' : 'Loading model'}
              </p>
              <p className="text-sm text-steel">
                {viewerState === 'error'
                  ? 'The vessel model could not be initialized.'
                  : 'Preparing the vessel viewer.'}
              </p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-xs text-mid font-mono">
        Concept 3D model of the aQuaFoil foiling Moth, showing the hull, rig, and hydrofoil layout.
      </figcaption>
    </figure>
  );
}
