import {useQuery, gql} from '@apollo/client'
import Feed from 'components/Feed'

const FEED_QUERY = gql`
  query angels_feed($offset: Int!) {
    angels_feed(offset: $offset) {
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

export default function AngelsFeedPage() {
  const { loading, data, fetchMore } = useQuery<QueryData, QueryVars>(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });

  if (!data?.angels_feed || loading) {
    return null
  }

  return (
    <Feed title="On Deck Angels 😇" feed={data.angels_feed} fetchMore={fetchMore} />
  )
}
