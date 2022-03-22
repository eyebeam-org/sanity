export default {
    title: 'Open Eyebeam',
    name: 'openEyebeam',
    type: 'document',
    // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Open Eyebeam Main Page Link',
            name: 'mainImage',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false,
            },
            fields: [
                {
                    title: 'Inverted',
                    name: 'inverted',
                    type: 'boolean',
                },
                {
                    title: 'Image',
                    name: 'image',
                    type: 'image',
                    fields: [
                        {
                            title: 'Alt text',
                            name: 'alt',
                            type: 'string',
                            options: {
                                isHighlighted: true
                            },
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'caption',
                            type: 'contentEditor',
                            title: 'Caption',
                            options: {
                                isHighlighted: true
                            }
                        },
                    ]
                },
                {
                    title: 'Text',
                    name: 'text',
                    type: 'contentEditor',
                },
                {
                    title: 'Internal link',
                    name: 'internalLink',
                    type: 'reference',
                    to: [{ type: 'person' }, { type: 'note' }, { type: 'news' }, { type: 'press' }, { type: 'journalPost' }, { type: 'program' }, { type: 'project' }, { type: 'videoPost' }, { type: 'event' }]
                },
                {
                    title: 'External link',
                    name: 'externalLink',
                    type: 'url',
                }
            ],
        }
    ]
}
