import './App.css';
import 'lightbox.js-react/dist/index.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { initLightboxJS } from "lightbox.js-react";

import {
  Art,
  Footer,
  AcquireNftCta,
  FAQ,
  Hero
} from './Elements'

require('typeface-barlow')

const queryClient = new QueryClient();

function App() {

  // initialiseLightboxLicense
  useEffect(() => {
    initLightboxJS(process.env.REACT_APP_LIGHTBOX_JS_KEY, "individual");
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App align-middle">
        <Hero />
        <AcquireNftCta />
        <Art />
        <FAQ />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
