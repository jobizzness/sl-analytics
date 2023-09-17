// pages/[...page].tsx
import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "./components/builder";
import '../assets/style.css';
import Footer from "./components/footer";
import Header from "./components/header";
import SignUp from "./form/sign-up";


// Replace with your Public API Key
builder.init("0138d51c1b0c466d9672ec0847372bd9");

interface PageProps {
    params: {
        page: string[];
    };
}

export default async function Page(props: PageProps) {
    const content = await builder
        // Get the page content from Builder with the specified options
        .get("page", {
            userAttributes: {
                // Use the page path specified in the URL to fetch the content
                urlPath: "/",
            },
            // Set prerender to false to return JSON instead of HTML
            prerender: false,
        })
        // Convert the result to a promise
        .toPromise();

    return (
        <>
            {/* Header */}

            <Header></Header>
            {/* Render the Builder page */}
            {/* <RenderBuilderContent content={content} /> */}
            <SignUp />
            {/* Footer */}
            <Footer></Footer>
        </>
    );
}