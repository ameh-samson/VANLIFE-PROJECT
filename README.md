### VANLIFE PROJECT

- The project is based on using React Route to make a multipage web app ({ BrowserRouter, Routes, Route, Link } from "react-router-dom");

- https://miragejs.com/ was used to mimic an API to fetch the VAN data from. This was also initialized by running "npm install --save-dev miragejs" in the vs code command terminal. The docs for this is located on mirage official site

- The data gotten from the server was displayed using "map method"

- In this project, the React Hooks used are:

1. useEffect: To fetch the data from the mimicked database which is located in the server js

2. useEffect: This is used to hold the data gotten from the api

3. useParams: To get the vans details without having to perform a fetch request again for better performance, ( { useParams } from "react-router-dom") was used. The id in the ( <Route path="/vans/:id"/>) was replaced by the id gotten from the fetched data

- Nested Route: this is used when you want to keep displaying some UI on the page but also want to display more (e.g /host, /host/income, /host/reviews, /host/vans, /host/vans/:id). This is also explain in the docs in https://remix.run/

* The navbar and footer is on every aspect of the page, hence "layout route come into place" as explain in the react router doc https://reactrouter.com/en/main/start/concepts#layout-routes
