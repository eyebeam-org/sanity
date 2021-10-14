export default {
    title: 'Program',
    name: 'program',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'image',
            fields: [
                {
                  name: 'caption',
                  type: 'simpleEditor',
                  title: 'Caption',
                },
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
            ]
        },
        {
            title: 'Introduction',
            name: 'introduction',
            type: 'simpleEditor'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
        },
        {
            title: 'Support text',
            name: 'supportText',
            type: 'contentEditor'
        },
        {
            title: 'FAQ',
            name: 'faq',
            type: 'array',
            of: [
                    {
                        type: 'object',
                        name: 'faqItem',
                        fields: [
                            {
                                title: 'Question',
                                name: 'question',
                                type: 'string'
                            },
                            {
                                title: 'Answer',
                                name: 'answer',
                                type: 'simpleEditor'
                            },
                        ]
                    }
                ]
        },
        {
            title: 'Open for applications',
            name: 'applicationsOpen',
            type: 'boolean'
        },
        {
            title: 'Application period end date',
            name: 'applicationEndDate',
            type: 'datetime',
            hidden: ({document}) => !document?.applicationsOpen
        },
        {
            title: 'Application text',
            name: 'applicationText',
            type: 'simpleEditor',
            hidden: ({document}) => !document?.applicationsOpen
        },
        {
            title: 'Fellows',
            name: 'fellows',
            type: 'array',
            of: [
                {
                    title: 'Person',
                    name: 'person',
                    type: 'reference',
                    to: [{type: 'person'}]
                },
            ]
        },
        {
            title: 'Past fellows',
            name: 'pastFellows',
            type: 'array',
            of: [
                    {
                        type: 'object',
                        name: 'fellowRecord',
                        fields: [
                            {
                                title: 'Person',
                                name: 'person',
                                type: 'reference',
                                to: [{type: 'person'}]
                            },
                            {
                                title: 'Year',
                                name: 'year',
                                type: 'string'
                            }
                        ]
                    }
                ]
        },
        {
            title: 'Advisors',
            name: 'advisors',
            type: 'array',
            of: [
                {
                    title: 'Person',
                    name: 'person',
                    type: 'reference',
                    to: [{type: 'person'}]
                },
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        }
    ]
}