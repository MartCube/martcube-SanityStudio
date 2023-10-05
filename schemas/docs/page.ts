import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'page',
	title: 'Pages',
	type: 'document',
	groups: [
		{
			name: 'page',
			title: 'Page Content',
			default: true,
		},
		{
			name: 'seo',
			title: 'SEO',
		},
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'page',
		}),
		defineField({
			name: 'uid',
			title: 'UID',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			group: 'page',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'pageContent',
			group: 'page',
		}),
		defineField({
			name: 'metaTags',
			type: 'metatags',
			group: 'seo',
		}),
		defineField({
			name: 'sitemap',
			title: "Sitemap",
			type: 'sitemap',
			group: 'seo',
		})
	],
})
