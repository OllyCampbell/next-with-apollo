import NextApp from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class App extends NextApp {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // This exposes query to user
        pageProps.query = ctx.query;
    }
    render() {
        const { Component, apollo, pageProps } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
}

export default withData(App);
