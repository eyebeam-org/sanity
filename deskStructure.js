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
    MdTopic,
    MdQuiz,
    MdHelpCenter,
    MdStickyNote2,
    MdDescription,
    MdLocationCity
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
                            // AMBIENT IMAGES
                            S.listItem()
                                .title("Ambient images")
                                .icon(MdCollections)
                                .child(
                                    S.editor()
                                        .title("Ambient images")
                                        .id('ambient-images')
                                        .schemaType("ambientImages")
                                        .documentId("ambient-images")
                                ),
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
            // SINGLE PAGES
            S.listItem()
                .title('Single pages')
                .icon(MdTopic)
                .child(
                    S.list()
                        .title('Single pages')
                        .items([
                            // EYEBEAM IS CHANGING
                            S.listItem()
                                .title("Eyebeam is changing")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Eyebeam is changing")
                                        .id('eyebeam-is-changing')
                                        .schemaType("eyebeamIsChanging")
                                        .documentId("eyebeam-is-changing")
                                ),
                            // SUPPORT
                            S.listItem()
                                .title("Support")
                                .icon(MdArticle)
                                .child(
                                    S.editor()
                                        .title("Support")
                                        .id('support')
                                        .schemaType("support")
                                        .documentId("support")
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
                                .title("About Overview")
                                .icon(MdHelpCenter)
                                .child(
                                    S.editor()
                                        .title("About Overview")
                                        .id('about')
                                        .schemaType("about")
                                        .documentId("about")
                                ),
                            // ABOUT PAGES
                            S.listItem()
                                .title('About Pages')
                                .icon(MdArticle)
                                .child(
                                    S.documentList()
                                        .title('About Page')
                                        .filter('_type == $type')
                                        .params({ type: 'aboutPage' })
                                ),
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
                        .params({ type: 'blogPost' })
                ),
        ]);