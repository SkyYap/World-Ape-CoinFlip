import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MiniKitProvider from "./minikit-provider.tsx";
import { StrictMode } from "react";
import { ErudaProvider } from "./components/Eruda";
import { ChakraProvider } from '@chakra-ui/react'
// import RoutingPage from "@/component/routes/RoutingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErudaProvider>
      <MiniKitProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </MiniKitProvider>
    </ErudaProvider>
  </StrictMode>
);


