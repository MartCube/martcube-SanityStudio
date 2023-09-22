import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'articleTag',
	title: 'Article Tag',
	type: 'document',
	fields: [
		defineField({
			name: 'value',
			title: 'Tag Name',
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
			title: 'value'
		},
		prepare(selection) {
			return {
				title: selection.title
			}
		},
	}
})
