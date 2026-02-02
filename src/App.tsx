import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GlitterRoseCollection from "./pages/GlitterRoseCollection";
import ScrunchieVariations from "./pages/ScrunchieVariations";
import PipeCleanerProducts from "./pages/PipeCleanerProducts";
import HairBandsSelection from "./pages/HairBandsSelection";
import RibbonRoseSelection from "./pages/RibbonRoseSelection";
import ChristmasTreeCollection from "./pages/ChristmasTreeCollection";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/glitter-rose-collection" element={<GlitterRoseCollection />} />
          <Route path="/scrunchie-variations" element={<ScrunchieVariations />} />
          <Route path="/pipe-cleaner-products" element={<PipeCleanerProducts />} />
          <Route path="/hair-bands-selection" element={<HairBandsSelection />} />
          <Route path="/ribbon-rose-selection" element={<RibbonRoseSelection />} />
          <Route path="/christmas-tree-collection" element={<ChristmasTreeCollection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
