import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contactSection',
	title: 'Contact',
	type: 'object',
	fields: [
		defineField({
			name: 'contactMsg',
			title: 'contact Message',
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
			name: 'email',
			title: 'Email Field',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "email",
		}),
		defineField({
			name: 'subject',
			title: 'Subject Field',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "subject",
		}),
		defineField({
			name: 'message',
			title: 'Message Field',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "message",
		}),
		defineField({
			name: 'submitBtn',
			title: 'Submit Button',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "Submit",
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Contact'
			}
		},
	}
})
