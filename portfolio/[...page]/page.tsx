// pages/[...page].tsx

import React, { useEffect } from "react";
import {
    BuilderComponent,
    Builder,
    builder,
    useIsPreviewing
} from '@builder.io/react'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import DefaultErrorPage from 'next/error';

import { parsePersonalizedURL } from '@builder.io/personalization-utils/next';

import '../assets/style.css';
import Footer from "../app/components/footer";
import Header from "../app/components/header";


// Replace with your Public API Key
builder.init("0138d51c1b0c466d9672ec0847372bd9");

interface PageProps {
    params: {
        page: string[];
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ path: string[] }>) {
    const { attributes } = parsePersonalizedURL(params?.path!);

    const page =
        (await builder
            .get('page', {
                apiKey: '0138d51c1b0c466d9672ec0847372bd9',
                userAttributes: attributes!,
                cachebust: true
            })
            .promise()) || null

    return {
        props: {
            page,
            attributes: attributes,
            locale: attributes!.locale || 'en-US'
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 1 seconds
        revalidate: 1
    }
}

export default async function Path({ page, attributes, locale }) {
    // const content = await builder
    //     // Get the page content from Builder with the specified options
    //     .get("page", {
    //         userAttributes: {
    //             // Use the page path specified in the URL to fetch the content
    //             urlPath: "/" + (props?.params?.page?.join("/") || ""),
    //         },
    //         // Set prerender to false to return JSON instead of HTML
    //         prerender: false,
    //     })
    //     // Convert the result to a promise
    //     .toPromise();

    // const router = useRouter()
    const isPreviewingInBuilder = useIsPreviewing()

    const { title, description, image } = page?.data || {}

    // useEffect(() => {
    //     builder.setUserAttributes(attributes!)
    // }, [])

    // if (router.isFallback) {
    //     return <h1>Loading...</h1>
    // }

    return (
        <>
            {/* Header */}
            <Head>
                {!page && <meta name="robots" content="noindex" />}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    type: 'website',
                    title,
                    description,
                    images: [
                        {
                            url: image,
                            width: 800,
                            height: 600,
                            alt: title
                        }
                    ]
                }}
            />

            <Header></Header>
            {/* Render the Builder page */}
            {(isPreviewingInBuilder || page) ? (
                <BuilderComponent
                    context={{ attributes }}
                    data={{ attributes, locale }}
                    model="page"
                    content={page}
                />

            ) : (
                <DefaultErrorPage statusCode={404} />
            )}

            {/* Footer */}
            <Footer></Footer>
        </>
    );
}