import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./menu-items";
import Loading from "../components/loading-component";
import { connect } from "react-redux";

function App(props) {
  const { isLoading } = props
  const flattenRouteComponent = []
  
  router.forEach(m => {
    if (m.action) {
      flattenRouteComponent.push(m, ...m.action)
    }
    flattenRouteComponent.push({ element: m.element, route: m.route })
  })

  return (
    <>
      <Loading visible={isLoading} />
      <Router>
        <Routes>
          {flattenRouteComponent.map((component, idx) => {
            return (
              <Route key={idx} path={component.route} element={component.element} />
            )
          })}
        </Routes>
      </Router>
    </>
  );
}


const stateProps = state => ({
  isLoading: state.root.loading,
});

export default connect(stateProps)(App);
