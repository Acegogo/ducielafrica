import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Accommodations from "./pages/Accommodations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path={"/ "} component={Home} />
      <Route path={"/destinations"} component={Destinations} />
      <Route path={"/packages"} component={Packages} />
      <Route path={"/booking"} component={Booking} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/about"} component={About} />
      <Route path={"/accommodations"} component={Accommodations} />
      <Route path={"/contact"} component={Contact} />
      {/* Fallback route */}
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Router />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
