### VANLIFE PROJECT

- The project is based on using React Route to make a multipage web app ({ BrowserRouter, Routes, Route, Link } from "react-router-dom");

- https://miragejs.com/ was used to mimic an API to fetch the VAN data from. This was also initialized by running "npm install --save-dev miragejs" in the vs code command terminal. The docs for this is located on mirage official site

- The data gotten from the server was displayed using "map method"

- In this project, the React Hooks used are:

1. useEffect: To fetch the data from the mimicked database which is located in the server js

2. useEffect: This is used to hold the data gotten from the api

3. useParams: To get the vans details without having to perform a fetch request again for better performance, ( { useParams } from "react-router-dom") was used. The id in the ( <Route path="/vans/:id"/>) was replaced by the id gotten from the fetched data

- Nested Route: this is used when you want to keep displaying some UI on the page but also want to display more (e.g /host, /host/income, /host/reviews, /host/vans, /host/vans/:id). This is also explain in the docs in https://remix.run/

- The navbar and footer is on every aspect of the page, hence "layout route come into place" as explain in the react router doc https://reactrouter.com/en/main/start/concepts#layout-routes

- To avoid repeating ourselves in as regards the Header, a Layout component was made. The App component was then replaced from a self closing <Route> to take up children and any props passed into it can affect other.
  To be able to have access to the children so to say, "outlet come into place" (import { Outlet } from "react-router-dom")

- To avoid repetition of path in the host path in App, relative path come in place. Even without the "/", react under the hood will treat it as a relative path.

- import { useOutletContext } from "react-router-dom" is used to pass down the prop from the parent <Outlet /> to the children as explained in https://reactrouter.com/en/main/hooks/use-outlet-context . Outlet is a context provider

- Search/Query parameters represents a change in the UI (sorting, filtering, pagination). Used as a single source of truth (ReactState, local state or external library like Redux) https://reactrouter.com/en/main/hooks/use-search-params
  Params works like state in react https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

- State can be added to <Link> , useLocation to access the state

- The function of "Navigate" in router is whenever it is rendered, it sends to the next route
