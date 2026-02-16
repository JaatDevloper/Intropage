import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Lenis from "lenis";

// Initialize smooth scrolling
const lenis = new Lenis({
  autoRaf: true,
});

createRoot(document.getElementById("root")!).render(<App />);
