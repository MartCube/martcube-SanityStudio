import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'landingSection',
	title: 'Landing',
	type: 'object',
	fields: [
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
			initialValue: 'Web Development'
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Landing'
			}
		},
	}
})
