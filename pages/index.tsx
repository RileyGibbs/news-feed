import styled from 'styled-components'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/Layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>On Deck News Feed</title>
      </Head>
      <h1>Welcome to the On Deck News Feed</h1>
      <span>Which fellowship are you in? 🤔</span>
      <br/>
      <FellowshipLinkRow>
        <Link href="/angels">Angels</Link>
        <p> | </p>
        <Link href="/founders">Founders</Link>
        <p> | </p>
        <Link href="/writers">Writers</Link>
      </FellowshipLinkRow>
    </Layout>
  )
}

const FellowshipLinkRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 21rem;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 10rem;
`
