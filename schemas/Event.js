export default {
    title: 'Event',
    name: 'event',
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
            title: 'Location',
            name: 'location',
            type: 'simpleEditor'
        },
        {
            title: 'Start Date',
            name: 'startDate',
            type: 'datetime'
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
            title: 'People',
            name: 'people',
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