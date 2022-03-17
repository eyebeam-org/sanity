export default {
    title: 'Ambient images',
    name: 'ambientImages',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
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
                            type: 'simpleEditor',
                            title: 'Caption',
                            options: {
                                isHighlighted: true
                            }
                        },
                    ]
                },
            ]
        },
    ]
}