export default {
    title: 'AmbientImages',
    name: 'ambientImages',
    type: 'document',
    fields: [
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
                {
                    title: 'Iage',
                    name: 'image',
                    type: 'image',
                    fields: [
                        {
                            name: 'caption',
                            type: 'simpleEditor',
                            title: 'Caption',
                        }
                    ]
                },
            ]
        },
    ]
}