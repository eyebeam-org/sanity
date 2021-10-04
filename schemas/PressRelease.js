export default {
    title: 'Press Release',
    name: 'pressRelease',
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
            options: {
                hotspot: true
            },
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
    ]
}