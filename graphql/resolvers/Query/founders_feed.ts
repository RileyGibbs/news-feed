import db, {FeedRow} from '../../db'

type Args = {
	offset: number;
}

export default async function founders_feed(parent: unknown, {offset}: Args): Promise<FeedRow[]> {
	const feed: FeedRow[] = await db.getAll(
		`
		SELECT "announcements-" || id as type, title, body, NULL as img_url, fellowship, created_ts FROM announcements WHERE fellowship == 'all' OR fellowship == 'founders'
		UNION ALL
		SELECT "users-" || id as type, name as title, bio as body, avatar_url as img_url, fellowship, created_ts FROM users WHERE fellowship == 'founders' OR fellowship == 'angels'
		UNION ALL
		SELECT "projects-" || id as type, name as title, description as body, icon_url as img_url, NULL as fellowship, created_ts FROM projects
		ORDER BY created_ts DESC
		LIMIT 5 OFFSET ?
		`,
		[offset]
	)
	if (!feed) {
		throw new Error(`No Announcements found`)
	}
	return feed
}