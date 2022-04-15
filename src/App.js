import React from "react";
import Auth from "./components/Auth";
import Routings from "./Routing";
import { useUserContext } from "./context/userContext";
import Dashboard from "./pages/Dashboard";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Routings /> : <Auth />} </>}
    </div>
  );
}

export default App;
