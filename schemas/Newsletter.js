export default {
    title: 'Newsletter',
    name: 'newsletter',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
        }
    ]
}