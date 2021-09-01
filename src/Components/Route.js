import { Switch, Route } from "react-router-dom";
import Body1 from "./Body"
import Body2 from "./Body2"
import Body3 from "./Body3"

export default function Routes() {
    return(
        <Switch>
        <Route exact from="/" render={() => <Body1/>} />
        <Route
          exact
          path="/body2"
          render={() => <Body2/>}
        />
        <Route
          exact
          path="/body3"
          render={() => <Body3/>}
        />
      </Switch>
    )
}