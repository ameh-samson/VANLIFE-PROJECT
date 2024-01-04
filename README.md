### VANLIFE PROJECT

The project is based on using React Route to make a multipage web app ({ BrowserRouter, Routes, Route, Link } from "react-router-dom");

https://miragejs.com/ was used to mimic an API to fetch the VAN data from. This was also initialized by running "npm install --save-dev miragejs" in the vs code command terminal. The docs for this is located on mirage official site

The data gotten from the server was displayed using "map method"

In this project, the React Hooks used are:

# 1 useEffect: To fetch the data from the mimicked database which is located in the server js

# 2 useEffect: This is used to hold the data gotten from the api

# 3 useParams: To get the vans details without having to perform a fetch request again for better performance, ( { useParams } from "react-router-dom") was used. The id in the ( <Route path="/vans/:id"/>) was replaced by the id gotten from the fetched data
