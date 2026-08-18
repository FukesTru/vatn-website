import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

const GasManagement = lazy(() => import("./pages/GasManagement"));
const HatcherySolutions = lazy(() => import("./pages/HatcherySolutions"));
const EngineeringPartners = lazy(() => import("./pages/EngineeringPartners"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Publications = lazy(() => import("./pages/Publications"));
const News = lazy(() => import("./pages/News"));
const ProductOverview = lazy(() => import("./pages/products/ProductOverview"));
const GasManagementOverview = lazy(() => import("./pages/products/GasManagementOverview"));
const GasNewProducts = lazy(() => import("./pages/products/GasNewProducts"));
const GasVacuumDegassing = lazy(() => import("./pages/products/GasVacuumDegassing"));
const GasLowHeadOxygen = lazy(() => import("./pages/products/GasLowHeadOxygen"));
const GasCO2Stripping = lazy(() => import("./pages/products/GasCO2Stripping"));
const GasCO2Scrubbing = lazy(() => import("./pages/products/GasCO2Scrubbing"));
const UVDisinfection = lazy(() => import("./pages/products/UVDisinfection"));
const BioMedia = lazy(() => import("./pages/products/BioMedia"));
const FishRearingTankDesign = lazy(() => import("./pages/products/FishRearingTankDesign"));
const AlkalinityEnhancement = lazy(() => import("./pages/products/AlkalinityEnhancement"));
const SolidsManagement = lazy(() => import("./pages/products/SolidsManagement"));
const CustomSolutions = lazy(() => import("./pages/products/CustomSolutions"));
const Contact = lazy(() => import("./pages/Contact"));
const OxygenationDegassing = lazy(() => import("./pages/products/OxygenationDegassing"));
const TermsAndConditionsPage = lazy(() => import("./pages/TermsAndConditions"));

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
      <Suspense fallback={null}>
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
      </Suspense>
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
