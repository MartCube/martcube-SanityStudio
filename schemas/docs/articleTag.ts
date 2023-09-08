import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'articleTag',
	title: 'Article Tag',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'title'
		},
		prepare(selection) {
			return {
				title: selection.title
			}
		},
	}
})
