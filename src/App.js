import "./App.css";
import "lightbox.js-react/dist/index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { initLightboxJS } from "lightbox.js-react";
import toast from "react-hot-toast";
import { Art, Footer, AcquireNftCta, FAQ, Hero } from "./Elements";
import { HCProvider } from "./Elements/utilities/hashconnect/HCProvider";

require("typeface-barlow");

const hashConnectAppMetadata = {
  name: "Inky Art Club",
  description:
    "Get access to an entire decade of adorable, unique, and exclusive NFT art by holding a Inky Super Pass, every single month.",
  icon: "https://spaces.remotesoftwaredevelopment.com/Ink%27s%20Art%20Club/2022/October/Starburst_Traveller_-min.png",
};

const queryClient = new QueryClient();

function App() {
  // initialiseLightboxLicense
  useEffect(() => {
    initLightboxJS(process.env.REACT_APP_LIGHTBOX_JS_KEY, "individual");
  });

  const network = process.env.REACT_APP_HEDERA_NETWORK || "testnet";

  const logger = useCallback(({ message, type }) => {
    return toast(message, { type });
  }, []);

  return (
    <HCProvider
      metaData={hashConnectAppMetadata}
      logger={logger}
      network={network}
      debug
    >
      <QueryClientProvider client={queryClient}>
        <div className="App align-middle">
          <Hero />
          <AcquireNftCta />
          <Art />
          <FAQ />
          <Footer />
        </div>
      </QueryClientProvider>
    </HCProvider>
  );
}

export default App;
