import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Fuerte Shop',

  projectId: '5wr9mbwf',
  dataset: 'production',

  plugins: [
    structureTool({ structure: deskStructure })
  ],

  schema: {
    types: schemaTypes,
  },
})
