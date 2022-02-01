import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "../Auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated() === true) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
