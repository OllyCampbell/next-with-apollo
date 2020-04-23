import Head from "next/head";

const Meta = () => (
    <Head>
        <meta name="viewport" context="width=devic-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{process.env.APP_NAME}</title>
    </Head>
);

export default Meta;
