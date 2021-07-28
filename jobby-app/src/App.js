import AppState from "./ContextApi/AppState";
import AppInner from "./AppInner";
function App() {
   return (
      <AppState>
         <AppInner />
      </AppState>
   );
}

export default App;
