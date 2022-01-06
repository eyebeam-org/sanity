import S from "@sanity/desk-tool/structure-builder";

// ICONS
import {
    MdAccountCircle,
    MdEvent,
    MdStar,
    MdStarBorder,
    MdHome,
    MdArticle,
    MdWork,
    MdGroups,
    MdComment,
    MdVideocam,
    MdMail,
    MdCollections,
    MdFlag,
    MdQuiz,
    MdStickyNote2,
    MdDescription,
    MdLocationCity,
    MdFlare,
    MdAlarm
} from "react-icons/md"

export default () =>
    S.list()
        .title("eyebeam.org")
        .items([
            // GENERAL
            S.listItem()
                .title('General')
                .icon(MdHome)
                .child(
                    S.list()
                        .title('General')
                        .items([
                            // STICKERS
                            S.listItem()
                                .title("Stickers")
                                .icon(MdAlarm)
                                .child(
                                    S.editor()
                                        .title("Stickers")
                                        .id("stickers")
                                        .schemaType("stickers")
                                        .documentId("stickers")
                                ),
                            // EYEBEAM IS CHANGING
                            S.listItem()
                                .title("Eyebeam is Changing")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Eyebeam is Changing")
                                        .id('eyebeam-is-changing')
                                        .schemaType("eyebeamIsChanging")
                                        .documentId("eyebeam-is-changing")
                                ),
                            // EVERYTHING
                            S.listItem()
                                .title("Everything")
                                .icon(MdFlare)
                                .child(
                                    S.editor()
                                        .title("Everything")
                                        .id('everything')
                                        .schemaType("everything")
                                        .documentId("everything")
                                ),
                            // NEWSLETTER
                            S.listItem()
                                .title("Newsletter")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Newsletter")
                                        .id('newsletter')
                                        .schemaType("newsletter")
                                        .documentId("newsletter")
                                ),
                            // AMBIENT IMAGES
                            S.listItem()
                                .title("Ambient Images")
                                .icon(MdCollections)
                                .child(
                                    S.editor()
                                        .title("Ambient images")
                                        .id('ambient-images')
                                        .schemaType("ambientImages")
                                        .documentId("ambient-images")
                                ),
                            // CITIES
                            S.listItem()
                                .title("Cities")
                                .icon(MdLocationCity)
                                .child(
                                    S.editor()
                                        .title("Cities")
                                        .id('cities')
                                        .schemaType("cities")
                                        .documentId("cities")
                                ),
                            S.divider(),
                            // STATEMENTS
                            S.listItem()
                                .title('Statements')
                                .icon(MdComment)
                                .child(
                                    S.documentList()
                                        .title('Statements')
                                        .filter('_type == $type')
                                        .params({ type: 'statement' })
                                ),
                            // GOALS
                            S.listItem()
                                .title('UN Goals')
                                .icon(MdFlag)
                                .child(
                                    S.documentList()
                                        .title('Goals')
                                        .filter('_type == $type')
                                        .params({ type: 'goal' })
                                ),

                        ])
                ),
            // ABOUT
            S.listItem()
                .title('About eyebeam')
                .icon(MdQuiz)
                .child(
                    S.list()
                        .title("About eyebeam")
                        .items([
                            // ABOUT OVERVIEW
                            S.listItem()
                                .title("What is Eyebeam?")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("What is Eyebeam?")
                                        .id('what-is-eyebeam')
                                        .schemaType("whatIsEyebeam")
                                        .documentId("what-is-eyebeam")
                                ),
                            // OUR MISSION AND VALUES
                            S.listItem()
                                .title("Our Mission and Values")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Our Mission and Values")
                                        .id('our-mission-and-values')
                                        .schemaType('ourMissionAndValues')
                                        .documentId('our-mission-and-values')
                                ),
                            // OUR HISTORY
                            S.listItem()
                                .title("Our History")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Our History")
                                        .id('our-history')
                                        .schemaType("ourHistory")
                                        .documentId("our-history")
                                ),
                            // STAFF AND BOARD
                            S.listItem()
                                .title("Staff and Board")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Staff and Board")
                                        .id('staff-and-board')
                                        .schemaType('staffAndBoard')
                                        .documentId('staff-and-board')
                                ),
                            // ARTISTS
                            S.listItem()
                                .title("Artists")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Artists")
                                        .id('artists')
                                        .schemaType("artists")
                                        .documentId("artists")
                                ),
                            // SUPPORT
                            S.listItem()
                                .title("Support")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Support")
                                        .id('support-eyebeam')
                                        .schemaType("supportEyebeam")
                                        .documentId("support-eyebeam")
                                ),
                            // GET INVOLVED
                            S.listItem()
                                .title("Get involved")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Get involved")
                                        .id('get-involved')
                                        .schemaType("getInvolved")
                                        .documentId("get-involved")
                                ),
                            // PRESS AND NEWS
                            S.listItem()
                                .title("Press and News")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Press and News")
                                        .id('press-and-news')
                                        .schemaType("pressAndNews")
                                        .documentId("press-and-news")
                                ),
                            // OUR OPERATING DOCUMENTS
                            S.listItem()
                                .title("Our Operating Documents")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Our Operating Documents")
                                        .id('our-operating-documents')
                                        .schemaType("ourOperatingDocuments")
                                        .documentId("our-operating-documents")
                                ),
                            // MEDIA KIT
                            S.listItem()
                                .title("Media kit")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Media kit")
                                        .id('media-kit')
                                        .schemaType("mediaKit")
                                        .documentId("media-kit")
                                ),
                            // CONTACT
                            S.listItem()
                                .title("Contact")
                                .icon(MdMail)
                                .child(
                                    S.editor()
                                        .title("Contact")
                                        .id('contact')
                                        .schemaType("contact")
                                        .documentId("contact")
                                ),
                            S.divider(),
                            // NEWS
                            S.listItem()
                                .title('News')
                                .icon(MdStar)
                                .child(
                                    S.documentList()
                                        .title('News')
                                        .filter('_type == $type')
                                        .params({ type: 'news' })
                                ),
                            // PRESS
                            S.listItem()
                                .title('Press')
                                .icon(MdStarBorder)
                                .child(
                                    S.documentList()
                                        .title('Press')
                                        .filter('_type == $type')
                                        .params({ type: 'press' })
                                ),
                        ])
                ),
            // PEOPLE
            S.listItem()
                .title('People')
                .icon(MdAccountCircle)
                .child(
                    S.documentList()
                        .title('People')
                        .filter('_type == $type')
                        .params({ type: 'person' })
                        .defaultOrdering([{ field: 'title', direction: 'asc' }])
                ),
            // PROGRAMS
            S.listItem()
                .title('Programs')
                .icon(MdGroups)
                .child(
                    S.documentList()
                        .title('Programs')
                        .filter('_type == $type')
                        .params({ type: 'program' })

                ),
            // PROJECTS
            S.listItem()
                .title('Projects')
                .icon(MdWork)
                .child(
                    S.documentList()
                        .title('Projects')
                        .filter('_type == $type')
                        .params({ type: 'project' })
                ),
            // EVENTS
            S.listItem()
                .title('Events')
                .icon(MdEvent)
                .child(
                    S.documentList()
                        .title('Events')
                        .filter('_type == $type')
                        .params({ type: 'event' })
                ),
            // NOTES
            S.listItem()
                .title('Notes')
                .icon(MdStickyNote2)
                .child(
                    S.documentList()
                        .title('Notes')
                        .filter('_type == $type')
                        .params({ type: 'note' })
                ),
            // VIDEO
            S.listItem()
                .title('Video')
                .icon(MdVideocam)
                .child(
                    S.documentList()
                        .title('Video')
                        .filter('_type == $type')
                        .params({ type: 'videoPost' })
                ),
            // JOURNAL
            S.listItem()
                .title('Journal')
                .icon(MdDescription)
                .child(
                    S.documentList()
                        .title('Journal')
                        .filter('_type == $type')
                        .params({ type: 'journalPost' })
                ),
        ]);