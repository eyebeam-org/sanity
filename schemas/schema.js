// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Schemas
// __ COMPONENTS
import contentEditor from './components/ContentEditor'
import simpleEditor from './components/SimpleEditor'
import embedBlock from './components/Embed'
import videoBlock from './components/Video'
import audioBlock from './components/Audio'
import dividerBlock from './components/Divider'
import columnsBlock from './components/Columns'
import donationWidget from './components/DonationWidget'
import applicationButton from './components/ApplicationButton'
import personList from './components/PersonList'
import Faq from './components/Faq'
// __ GENERAL
import eyebeamIsChanging from './general/EyebeamIsChanging'
import newsletter from './general/Newsletter'
import everything from './general/Everything'
import ambientImages from './general/AmbientImages'
import cities from './general/Cities'
import goal from './general/Goal'
import statement from './general/Statement'
import stickers from './general/Stickers'
import openEyebeam from './general/OpenEyebeam'
// __ ABOUT
import whatIsEyebeam from './about/WhatIsEyebeam'
import ourMissionAndValues from './about/OurMissionAndValues'
import ourHistory from './about/OurHistory'
import staffAndBoard from './about/StaffAndBoard'
import artists from './about/Artists'
import supportEyebeam from './about/SupportEyebeam'
import getInvolved from './about/GetInvolved'
import pressAndNews from './about/PressAndNews'
import ourOperatingDocuments from './about/OurOperatingDocuments'
import mediaKit from './about/MediaKit'
import contact from './about/Contact'
// __ PEOPLE
import person from './categories/people/Person'
// __ PROGRAM
import programOverview from './categories/program/ProgramOverview'
import program from './categories/program/Program'
// __ EVENT
import event from './categories/event/Event'
// __ NOTE
import note from './categories/note/Note'
// __ JOURNAL
import journalPost from './categories/journal/JournalPost'
import journalOverview from './categories/journal/JournalOverview'
// __ PROJECT
import project from './categories/project/Project'
// __ PRESS
import press from './categories/press/Press'
// __ NEWS
import news from './categories/news/News'
// __ VIDEO
import videoPost from './categories/video/VideoPost'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // COMPONENTS
    contentEditor,
    simpleEditor,
    embedBlock,
    videoBlock,
    audioBlock,
    dividerBlock,
    columnsBlock,
    donationWidget,
    applicationButton,
    personList,
    Faq,
    // GENERAL
    eyebeamIsChanging,
    everything,
    ambientImages,
    newsletter,
    cities,
    statement,
    goal,
    stickers,
    openEyebeam,
    // ABOUT
    whatIsEyebeam,
    ourMissionAndValues,
    ourHistory,
    staffAndBoard,
    artists,
    supportEyebeam,
    getInvolved,
    pressAndNews,
    ourOperatingDocuments,
    mediaKit,
    contact,
    // CATEGORIES
    programOverview,
    program,
    person,
    event,
    note,
    journalPost,
    journalOverview,
    project,
    press,
    news,
    videoPost,
  ]),
})
