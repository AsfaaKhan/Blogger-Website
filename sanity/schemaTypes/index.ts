import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { post } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,author],
}
