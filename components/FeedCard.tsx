import styled from 'styled-components'
import Link from 'next/link'
import Card from './Card'
import Markdown from './Markdown'

type Props = {
  feed_result: FeedResult;
}

type FeedResult = {
  title: string;
  body: string;
  img_url: string;
  fellowship: string;
  type: string;
  created_ts: string;
}

export default function FeedCard({feed_result}: Props) {
	return (
		<Card>
			<Columns>
				{!!feed_result.img_url && (
					<>
						<ColumnLeft>
								<Avatar src={feed_result.img_url}/>
						</ColumnLeft>
					</>
				)}
				<ColumnRight>
					<h2>{feed_result.title}</h2>
					{!!feed_result.fellowship &&
						feed_result.type.includes('user') && (
						<>
							<p>Fellowship: {feed_result.fellowship}</p>
						</>
					)}
					<Markdown>{feed_result.body}</Markdown>
				</ColumnRight>
			</Columns>
			{feed_result.type.includes('user') && (
				<>
					<FooterRow>
						<Link href={"/".concat(feed_result.type.replace("-", "/"))}>See profile ></Link>
					</FooterRow>
				</>
			)}
			{feed_result.type.includes('project') && (
				<>
					<FooterRow>
						<Link href={"/".concat(feed_result.type.replace("-", "/"))}>See project ></Link>
					</FooterRow>
				</>
			)}
		</Card>
	)
}

const Avatar = styled.img`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-height: 10rem;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 21rem;
`

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 21rem;
  justify-content: flex-end;
`

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 7rem;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1.5rem;
`

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 14rem;
`
