import React from "react";
import { Router as BaseRouter } from "@reach/router";
import { ProtectedRoute, GuestRoute, Route, NestedRoute } from "./base";

import HomePage from "../views/Home";
import NotFoundPage from "../views/errors/404";
import ListPostPage from "../views/posts/ListPost";
import ShowPostPage from "../views/posts/ShowPost";
import LoginPage from "../views/Login";
import AboutPage from "../views/About";

const Router = () => {
    return (
        <BaseRouter>
            <Route path="/" page={HomePage} />
            <NestedRoute path="/posts">
                <ProtectedRoute path="/" page={ListPostPage} />
                <ProtectedRoute path=":postId" page={ShowPostPage} />
            </NestedRoute>
            <GuestRoute path="/login" page={LoginPage} />
            <Route path="/about" page={AboutPage} />
            <Route default page={NotFoundPage} />
        </BaseRouter>
    );
};
export default Router