// article blocks
import gallery from './articleBlocks/gallery'
import youtube from './articleBlocks/youtube'
// page blocks
import contact from './pageBlocks/contact'
import about from './pageBlocks/about'
import landing from './pageBlocks/landing'
import work from './pageBlocks/work'
import blog from './pageBlocks/blog'
// content
import articleContent from './content/articleContent'
import pageContent from './content/pageContent'
// docs
import article from './docs/article'
import articleTag from './docs/articleTag'
import page from './docs/page'
import project from './docs/project'
// objects
import metaTags from './objects/metaTags'

export const schemaTypes = [
	articleContent,
	pageContent,
	gallery,
	youtube,
	metaTags,
	contact,
	about,
	article,
	articleTag,
	page,
	project,
	landing,
	work,
	blog
]
