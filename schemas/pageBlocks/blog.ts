import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'blogSection',
	title: 'Blog',
	type: 'object',
	fields: [
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'boolean',
			initialValue: true,
		}),
		defineField({
			name: 'pagination',
			title: 'Pagination',
			type: 'boolean',
			initialValue: true,
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Blog'
			}
		},
	}
})
