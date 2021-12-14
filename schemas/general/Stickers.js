export default {
    title: 'Stickers',
    name: 'stickers',
    type: 'document',
    // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Sticker (Left)',
            name: 'stickerLeft',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false,
            },
            fields: [
                {
                    title: 'Enabled',
                    name: 'enabled',
                    type: 'boolean',
                },
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
                            }
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
                {
                    title: 'Text',
                    name: 'text',
                    type: 'simpleEditor',
                },
                {
                    title: 'Countdown',
                    name: 'countdown',
                    type: 'boolean',
                },
                {
                    title: 'Countdown to time',
                    name: 'countdownTime',
                    type: 'datetime',
                    hidden: ({ document }) => !document?.stickerLeft?.countdown,
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
        },
        {
            title: 'Sticker (Right)',
            name: 'stickerRight',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false,
            },
            fields: [
                {
                    title: 'Enabled',
                    name: 'enabled',
                    type: 'boolean',
                },
                {
                    title: 'Inverted',
                    name: 'inverted',
                    type: 'boolean',
                },
                {
                    title: 'Full width',
                    name: 'fullWidth',
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
                            }
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
                {
                    title: 'Text',
                    name: 'text',
                    type: 'simpleEditor',
                },
                {
                    title: 'Countdown',
                    name: 'countdown',
                    type: 'boolean',
                },
                {
                    title: 'Countdown to time',
                    name: 'countdownTime',
                    type: 'datetime',
                    hidden: ({ document }) => !document?.stickerRight?.countdown,
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