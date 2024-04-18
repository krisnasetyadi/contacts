import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./menu-items";

function App() {
  const flattenRouteComponent = []
  
  router.forEach(m => {
    if (m.action) {
      flattenRouteComponent.push(m, ...m.action)
    }
    flattenRouteComponent.push({ element: m.element, route: m.route })
  })

  return (
    <Router>
      <Routes>
        {flattenRouteComponent.map((component, idx) => {
          return (
            <Route key={idx} path={component.route} element={component.element} />
          )
        })}
      </Routes>
    </Router>
  );
}

export default App;
