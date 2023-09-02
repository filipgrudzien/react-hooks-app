// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {MenuPageComponent} from "./menu-page/MenuPageComponent";
import {MousePositionComponent} from "./hook-pages/mouse-position/MousePositionComponent";
import {NotFoundPageComponent} from "./not-found-page/NotFoundPageComponent";

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
export function App(): React.JSX.Element {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuPageComponent />} />
                <Route path="/mouse-position" element={<MousePositionComponent />} />
                <Route path="/404" element={<NotFoundPageComponent />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
