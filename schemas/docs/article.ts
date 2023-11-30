import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'article',
	title: 'Articles',
	type: 'document',
	groups: [
		{
			name: 'article',
			title: 'Article Content',
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
			group: 'article',
		}),
		defineField({
			name: 'uid',
			title: 'UID',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			group: 'article',
		}),
		defineField({
			name: 'tag',
			title: 'Tag',
			type: 'reference',
			weak: true,
			to: [{ type: 'articleTag' }],
			group: 'article',
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'date',
			options: {
				dateFormat: 'MMM-DD-YYYY',
			},
			group: 'article',
		}),
		defineField({
			name: 'poster',
			title: 'Poster',
			type: 'image',
			options: {
				hotspot: true,
			},
			group: 'article',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'articleContent',
			group: 'article',
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
			initialValue: 0.9,
			validation: Rule => Rule.precision(1).min(0).max(1).required(),
		}),
	],
})
