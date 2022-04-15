import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SearchParams from "./pages/SearchRecipe";
import Details from "./components/Details";
import SearchByIng from "./pages/SearchByIng";
import SearchByNutrients from "./pages/SearchByNutrients";
import SearchSimilarRecipe from "./pages/SearchSimilarRecipes";
import Auth from "./components/Auth";

const Routings = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />}></Route>
        {/* <Route path="/" element={<Auth />}></Route> */}
        <Route path="/home" element={<SearchParams />} />
        <Route path="/ingredients" element={<SearchByIng />} />
        <Route path="/nutrients" element={<SearchByNutrients />} />
        <Route path="/similar" element={<SearchSimilarRecipe />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routings;
