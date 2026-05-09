import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useMSAEffects, useAudio } from '../hooks/useMSAEffects';

export default function Layout({ children, title, description, ogImage }) {
  useMSAEffects();
  useAudio();

  const pageTitle = title || 'MSA Agency';
  const pageDesc = description || 'Innovative Digital Marketing Agency — We build brands that lead the future.';
  const pageImage = ogImage || 'https://msa-agency.com/assets/img/icons/Logo.png';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MSA Agency" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImage} />
        <link rel="icon" href="/assets/img/icons/favicon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>

      {/* HUD Cursor */}
      <div id="cursor-hud"></div>

      {/* Background Audio */}
      <audio id="bg-music-file" loop>
        <source src="/assets/video/brand-ascension.mp3" type="audio/mpeg" />
      </audio>
      <button id="manual-audio-control" aria-label="Toggle Music">
        <i className="fas fa-play"></i>
        <span className="audio-tooltip">Play Music</span>
      </button>

      <div className="grid-overlay"></div>

      <Navbar />

      <main>{children}</main>

      <Footer />

      {/* Chatbase AI Assistant */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...args) => {
                  if (!window.chatbase.q) window.chatbase.q = [];
                  window.chatbase.q.push(args);
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop) {
                    if (prop === "q") return target.q;
                    return (...args) => target(prop, ...args);
                  },
                });
              }
              const onLoad = function () {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "bb5P-Qi9BKshmEa8s81U2";
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              };
              if (document.readyState === "complete") onLoad();
              else window.addEventListener("load", onLoad);
            })();
          `,
        }}
      />
    </>
  );
}
