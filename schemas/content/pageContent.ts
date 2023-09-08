import { defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'pageContent',
	title: 'Page Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'landingSection',
		}),
		defineArrayMember({
			type: 'aboutSection',
		}),
		defineArrayMember({
			type: 'contactSection',
		}),
		defineArrayMember({
			type: 'blogSection',
		}),
		defineArrayMember({
			type: 'workSection',
		}),
	],
})
