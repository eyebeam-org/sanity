import S from "@sanity/desk-tool/structure-builder";

// ICONS
import {
    MdAccountCircle,
    MdBook,
    MdEvent,
    MdStar,
    MdHome,
    MdNotifications,
    MdArticle,
    MdPlace,
    MdNotes,
    MdWork,
    MdGroups,
    MdComment
  } from "react-icons/md"

export default () =>
    S.list()
        .title("eyebeam.org")
        .items([
            // HOMEPAGE
            S.listItem()
                .title("Homepage")
                .icon(MdHome)
                .child(
                    S.editor()
                        .title("Homepage")
                        .id('homepage')
                        .schemaType("homepage")
                        .documentId("homepage")
                ),
            // ABOUT
            S.listItem()
                .title('About')
                .icon(MdBook)
                .child(
                    S.list()
                        .title("About")
                        .items([
                            S.listItem()
                                .title("About Overview")
                                .icon(MdBook)
                                .child(
                                    S.editor()
                                        .title("About Overview")
                                        .id('about')
                                        .schemaType("about")
                                        .documentId("about")
                                ),
                            S.listItem()
                                .title('About Pages')
                                .icon(MdBook)
                                .child(
                                    S.documentList()
                                        .title('About Page')
                                        .filter('_type == $type')
                                        .params({ type: 'aboutPage' })
                                ),
                        ])
                ),
            // PROGRAM
            S.listItem()
                .title('Program')
                .icon(MdGroups)
                .child(
                    S.list()
                        .title("Program")
                        .items([
                            S.listItem()
                                .title("Program Overview")
                                .icon(MdGroups)
                                .child(
                                    S.editor()
                                        .title("Programs Overview")
                                        .id('programOverview')
                                        .schemaType("programOverview")
                                        .documentId("programOverview")
                                ),
                            S.listItem()
                                .title('Program')
                                .icon(MdGroups)
                                .child(
                                    S.documentList()
                                        .title('Program')
                                        .filter('_type == $type')
                                        .params({ type: 'program' })
                                ),
                        ])
                ),
                // PEOPLE
                S.listItem()
                    .title('People')
                    .icon(MdAccountCircle)
                    .child(
                        S.list()
                            .title("People")
                            .items([
                                S.listItem()
                                    .title('Person')
                                    .icon(MdAccountCircle)
                                    .child(
                                        S.documentList()
                                            .title('Person')
                                            .filter('_type == $type')
                                            .params({ type: 'person' })
                                    ),
                            ])
                    ),
                    // EVENT
                    S.listItem()
                        .title('Event')
                        .icon(MdEvent)
                        .child(
                            S.list()
                                .title("Event")
                                .items([
                                    S.listItem()
                                        .title('Event')
                                        .icon(MdEvent)
                                        .child(
                                            S.documentList()
                                                .title('Event')
                                                .filter('_type == $type')
                                                .params({ type: 'event' })
                                        ),
                                ])
                        ),
                    // NOTES
                    S.listItem()
                        .title('Notes')
                        .icon(MdNotes)
                        .child(
                            S.list()
                                .title("Notes")
                                .items([
                                    S.listItem()
                                        .title('Notes')
                                        .icon(MdNotes)
                                        .child(
                                            S.documentList()
                                                .title('Notes')
                                                .filter('_type == $type')
                                                .params({ type: 'note' })
                                        ),
                                ])
                        ),
                    // GOALS
                    S.listItem()
                        .title('Goals')
                        .icon(MdPlace)
                        .child(
                            S.list()
                                .title("Goals")
                                .items([
                                    S.listItem()
                                        .title('Goals')
                                        .icon(MdPlace)
                                        .child(
                                            S.documentList()
                                                .title('Goals')
                                                .filter('_type == $type')
                                                .params({ type: 'goal' })
                                        ),
                                ])
                        ),
                    // PROJECTS
                    S.listItem()
                        .title('Projects')
                        .icon(MdWork)
                        .child(
                            S.list()
                                .title("Projects")
                                .items([
                                    S.listItem()
                                        .title('Projects')
                                        .icon(MdWork)
                                        .child(
                                            S.documentList()
                                                .title('Projects')
                                                .filter('_type == $type')
                                                .params({ type: 'project' })
                                        ),
                                ])
                        ),
                    // PRESS
                    S.listItem()
                        .title('Press')
                        .icon(MdStar)
                        .child(
                            S.list()
                                .title("Press")
                                .items([
                                    S.listItem()
                                        .title('Press')
                                        .icon(MdStar)
                                        .child(
                                            S.documentList()
                                                .title('Press')
                                                .filter('_type == $type')
                                                .params({ type: 'press' })
                                        ),
                                ])
                        ),
                    // STATEMENTS
                    S.listItem()
                        .title('Statements')
                        .icon(MdComment)
                        .child(
                            S.list()
                                .title("Statements")
                                .items([
                                    S.listItem()
                                        .title('Statements')
                                        .icon(MdComment)
                                        .child(
                                            S.documentList()
                                                .title('Statements')
                                                .filter('_type == $type')
                                                .params({ type: 'statement' })
                                        ),
                                ])
                        ),
                    // BLOG
                    S.listItem()
                        .title('Blog')
                        .icon(MdArticle)
                        .child(
                            S.list()
                                .title("Blog")
                                .items([
                                    S.listItem()
                                        .title("Blog Overview")
                                        .icon(MdStar)
                                        .child(
                                            S.editor()
                                                .title("Blog Overview")
                                                .id('blogOverview')
                                                .schemaType("blogOverview")
                                                .documentId("blogOverview")
                                        ),
                                    S.listItem()
                                        .title('Blog Posts')
                                        .icon(MdArticle)
                                        .child(
                                            S.documentList()
                                                .title('Blog Posts')
                                                .filter('_type == $type')
                                                .params({ type: 'blogPost' })
                                        ),
                                ])
                        )
        ]);