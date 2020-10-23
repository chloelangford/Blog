import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout/layout'

export default function FirstPost() {
    return (

        <Layout>
        <div className="container">
            <Head>
                <title>Fashion Swipe</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </div>
        </Layout>
    )
}
