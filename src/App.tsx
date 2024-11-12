import { Route, Switch } from "wouter";
import Home from "./pages/home";
import TheStory from "./pages/the-story";
import TheDay from "./pages/the-day";
import TheParty from "./pages/the-party";
import QandA from "./pages/q-and-a";
import RSVP from "./pages/rsvp";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/the-story" component={TheStory} />
        <Route path="/the-day" component={TheDay} />
        <Route path="/the-party" component={TheParty} />
        <Route path="/q&a" component={QandA} />
        <Route path="/rsvp" component={RSVP} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
