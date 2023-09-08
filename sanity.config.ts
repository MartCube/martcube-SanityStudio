import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { structure } from './deskStructure'

export default defineConfig({
	name: 'default',
	title: 'MartCube',
	projectId: '00y851a9',
	dataset: 'production',

	plugins: [
		deskTool({
			structure: structure
		}),
		media(),
		visionTool(),
	],

	form: {
		image: {
			assetSources: () => [mediaAssetSource],
			// directUploads: false,
		}
	},

	schema: {
		types: schemaTypes,
	},

})
