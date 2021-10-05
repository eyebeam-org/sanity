// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Schemas
// __ OBJECTS
import contentEditor from './ContentEditor'
import simpleEditor from './SimpleEditor'
import embedBlock from './Embed'
import videoBlock from './Video'
import audioBlock from './Audio'
// __ ABOUT
import about from './about'
import aboutPage from './AboutPage'
// __ PROGRAM
import programOverview from './ProgramOverview'
import program from './Program'
// __ PEOPLE
import person from './Person'
// __ EVENT
import event from './Event'
// __ HOMEPAGE
import homepage from './Homepage'
// __ PRESS RELEASE
import note from './Note'
// __ BLOG
import blogPost from './BlogPost'
import blogOverview from './BlogOverview'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    contentEditor, simpleEditor, about, aboutPage, embedBlock, videoBlock, audioBlock, programOverview, program, person, event, homepage, note, blogPost, blogOverview
  ]),
})