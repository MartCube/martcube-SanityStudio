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
			type: 'metaTags',
			group: 'seo',
		}),
		defineField({
			name: 'sitePriority',
			title: 'Sitemap Priority',
			type: 'number',
			group: 'seo',
			initialValue: 1,
			validation: Rule => Rule.precision(1).min(0).max(1).required(),
		}),
	],
})
