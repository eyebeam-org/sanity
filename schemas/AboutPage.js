export default {
    title: 'About page',
    name: 'aboutPage',
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
        }
    ]
}