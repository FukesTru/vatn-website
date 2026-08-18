import { useEffect, useRef, useState } from "react";

const FORM_ID = "EixvLXvkzStptg4CDAf0";
const EMBED_SCRIPT_ID = "vatn-ghl-form-embed";

function ensureEmbedScript() {
  if (document.getElementById(EMBED_SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = EMBED_SCRIPT_ID;
  script.src = "https://link.msgsndr.com/js/form_embed.js";
  script.async = true;
  document.body.appendChild(script);
}

export default function GHLForm({ defer = false }: { defer?: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!defer);

  useEffect(() => {
    if (!defer) return;
    const host = hostRef.current;
    if (!host || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(host);
    return () => observer.disconnect();
  }, [defer, shouldLoad]);

  useEffect(() => {
    if (shouldLoad) ensureEmbedScript();
  }, [shouldLoad]);

  return (
    <div ref={hostRef} style={{ width: "100%", minHeight: "551px" }}>
      {shouldLoad ? (
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
          style={{ width: "100%", height: "551px", border: "none", borderRadius: "0px" }}
          id={`inline-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form of VATN"
          data-height="551"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          title="Form of VATN"
        />
      ) : null}
    </div>
  );
}
