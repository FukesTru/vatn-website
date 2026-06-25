import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import GasManagement from "./pages/GasManagement";
import HatcherySolutions from "./pages/HatcherySolutions";
import EngineeringPartners from "./pages/EngineeringPartners";
import OurTeam from "./pages/OurTeam";
import Products from "./pages/Products";
import Publications from "./pages/Publications";
import News from "./pages/News";

// Scroll to top whenever the route changes
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/gas-management" component={GasManagement} />
        <Route path="/hatchery-solutions" component={HatcherySolutions} />
        <Route path="/engineering-partners" component={EngineeringPartners} />
        <Route path="/our-team" component={OurTeam} />
        <Route path="/products" component={Products} />
        <Route path="/publications" component={Publications} />
        <Route path="/news" component={News} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
