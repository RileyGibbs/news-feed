import {useQuery, gql} from '@apollo/client'
import Feed from 'components/Feed'


const FEED_QUERY = gql`
  query writers_feed($offset: Int!) {
    writers_feed(offset: $offset) {
      title
      body
      img_url
      fellowship
      type
      created_ts
    }
  }
`

type QueryData = {
  feed: FeedResult;
}

type QueryVars = {
  offset: number;
}

export default function WritersFeedPage() {
  const { loading, data, fetchMore } = useQuery<QueryData, QueryVars>(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });

  if (!data?.writers_feed || loading) {
    return null
  }

  return (
    <Feed title="On Deck Writers 📝" feed={data?.writers_feed} fetchMore={fetchMore} />
  )
}