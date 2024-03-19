"use client";

import { Global } from "@emotion/react";

export const Fonts: React.FC = () => (
  <Global
    styles={`
      @font-face {
        font-family: "BagnardSans";
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url("/fonts/BagnardSans.otf") format("opentype");
      }
      
      @font-face {
        font-family: "Bagnard";
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url("/fonts/Bagnard.otf") format("opentype");
      }

      /* latin-ext */
      @font-face {
        font-family: 'Kode Mono';
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url("/fonts/Kode-Mono-Latin-Ext.woff2") format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }

      /* latin */
      @font-face {
        font-family: 'Kode Mono';
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url("/fonts/Kode-Mono-Latin.woff2") format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: "BasteleurBold";
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url("/fonts/Basteleur-Bold.otf") format("opentype");
      }

`}
  />
);