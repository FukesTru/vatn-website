import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import GasManagement from "./pages/GasManagement";
import HatcherySolutions from "./pages/HatcherySolutions";
import EngineeringPartners from "./pages/EngineeringPartners";
import OurTeam from "./pages/OurTeam";
import Publications from "./pages/Publications";
import News from "./pages/News";
import ProductOverview from "./pages/products/ProductOverview";
import GasManagementOverview from "./pages/products/GasManagementOverview";
import GasNewProducts from "./pages/products/GasNewProducts";
import GasVacuumDegassing from "./pages/products/GasVacuumDegassing";
import GasLowHeadOxygen from "./pages/products/GasLowHeadOxygen";
import GasCO2Stripping from "./pages/products/GasCO2Stripping";
import GasCO2Scrubbing from "./pages/products/GasCO2Scrubbing";
import UVDisinfection from "./pages/products/UVDisinfection";
import BioMedia from "./pages/products/BioMedia";
import FishRearingTankDesign from "./pages/products/FishRearingTankDesign";
import AlkalinityEnhancement from "./pages/products/AlkalinityEnhancement";
import SolidsManagement from "./pages/products/SolidsManagement";
import CustomSolutions from "./pages/products/CustomSolutions";
import Contact from "./pages/Contact";
import OxygenationDegassing from "./pages/products/OxygenationDegassing";
import TermsAndConditionsPage from "./pages/TermsAndConditions";

// Scroll to top whenever the route changes
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Switch>
          <Route path="/" component={Home} />
          <Route path="/gas-management" component={GasManagement} />
          <Route path="/hatchery-solutions" component={HatcherySolutions} />
          <Route path="/engineering-partners" component={EngineeringPartners} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/publications" component={Publications} />
          <Route path="/news" component={News} />
          <Route path="/products" component={ProductOverview} />
          <Route path="/products/gas-management" component={GasManagementOverview} />
          <Route path="/products/gas-management/new-products" component={GasNewProducts} />
          <Route path="/products/gas-management/vacuum-degassing" component={GasVacuumDegassing} />
          <Route path="/products/gas-management/low-head-oxygen" component={GasLowHeadOxygen} />
          <Route path="/products/gas-management/co2-stripping" component={GasCO2Stripping} />
          <Route path="/products/gas-management/co2-scrubbing" component={GasCO2Scrubbing} />
          <Route path="/products/uv-disinfection" component={UVDisinfection} />
          <Route path="/products/bio-media" component={BioMedia} />
          <Route path="/products/fish-rearing-tank-design" component={FishRearingTankDesign} />
          <Route path="/products/alkalinity-enhancement" component={AlkalinityEnhancement} />
          <Route path="/products/solids-management" component={SolidsManagement} />
          <Route path="/products/custom-solutions" component={CustomSolutions} />
          <Route path="/products/oxygenation-degassing" component={OxygenationDegassing} />
          <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
