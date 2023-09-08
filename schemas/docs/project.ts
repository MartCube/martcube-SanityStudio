import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'project',
	title: 'Project',
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
		defineField({
			name: 'website',
			title: 'Website link',
			type: 'url',
		}),
		defineField({
			name: 'poster',
			title: 'Poster',
			type: 'image',
		}),
	],
})
