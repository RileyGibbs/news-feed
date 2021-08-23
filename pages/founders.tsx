import {useQuery, gql} from '@apollo/client'
import Feed from 'components/Feed'

const FEED_QUERY = gql`
  query founders_feed($offset: Int!) {
    founders_feed(offset: $offset) {
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

export default function FoundersFeedPage() {
  const { loading, data, fetchMore } = useQuery<QueryData, QueryVars>(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });

  if (!data?.founders_feed || loading) {
    return null
  }

  return (
    <Feed title="On Deck Founders ⚒️" feed={data?.founders_feed} fetchMore={fetchMore}/>
  )
}