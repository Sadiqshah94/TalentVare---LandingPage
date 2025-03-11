import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import { Suspense } from "react";
import Header from "./layout/Header/Header";

const App = () => {
  console.log("routesroutesroutes",routes)
  return (
    <div>
      <Header/>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<div className=" loader"></div>}>
                {route.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
