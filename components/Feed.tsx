import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'
import Layout from 'components/Layout'
import FeedCard from 'components/FeedCard'

type Args = {
	offset: number;
}

type Props = {
  title: string;
  feed: FeedResult[];
  fetchMore: ({variables: Args}) => void;
}


export default function Feed({title, feed, fetchMore}: Props) {

	return (
		<Layout>
      <MainColumn>
        <br/>
        <h1>{title}</h1>
        <InfiniteScroll
          dataLength={feed.length}
          next={() => fetchMore({
            variables: {
              offset: feed.length,
            }
          })}
          hasMore={true}>
            {feed.map(f => (
              <FeedCard key={f.type} feed_result={f}/>
            ))}
        </InfiniteScroll>
      </MainColumn>
    </Layout>
	);
}

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400rem;
`
