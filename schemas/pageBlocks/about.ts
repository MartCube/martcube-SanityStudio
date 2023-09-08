import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'aboutSection',
	title: 'About',
	type: 'object',
	fields: [
		defineField({
			name: 'aboutText',
			title: 'About Text',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
					],
					lists: [],
					marks:{
						decorators: [],
						annotations: [],
					}
				},
			]
		}),
		defineField({
			name: 'contactText',
			title: 'Contact Text',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
					],
					lists: [],
					marks:{
						decorators: [],
						annotations: [],
					}
				},
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'About'
			}
		},
	}
})
