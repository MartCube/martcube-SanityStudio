import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'workSection',
	title: 'Work',
	type: 'object',
	fields: [
		defineField({
			name: 'projects',
			title: 'Projects',
			type: 'array',
			of: [
				defineField({
					name: 'projectRef',
					title: 'Tag',
					type: 'reference',
					weak: true,
					to: [{ type: 'project' }],
					options: {
						disableNew: true,
					},
				}),
			]
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Work'
			}
		},
	}
})
