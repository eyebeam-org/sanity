// ICONS
import {
    MdArticle,
} from "react-icons/md"

export default {
    title: 'Media Kit',
    name: 'mediaKit',
    icon: MdArticle,
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Main image',
            name: 'mainImage',
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
            title: 'Internal links',
            description: 'Shown in the See also section of the page.',
            name: 'internalLinks',
            type: 'array',
            of: [
                {
                    title: 'Link',
                    name: 'link',
                    type: 'reference',
                    to: [{ type: 'person' }, { type: 'note' }, { type: 'news' }, { type: 'press' }, { type: 'journalPost' }, { type: 'program' }, { type: 'project' }, { type: 'videoPost' }, { type: 'event' }]
                },
            ]
        },
        {
            title: 'External links',
            description: 'Shown in the See also section of the page.',
            name: 'externalLinks',
            type: 'array',
            of: [
                {
                    title: 'Link',
                    name: 'link',
                    type: 'object',
                    fields: [
                        {
                            title: 'Link text',
                            name: 'linkText',
                            type: 'string',
                        },
                        {
                            title: 'Link URL',
                            name: 'linkUrl',
                            type: 'url',
                        }
                    ]
                },
            ]
        }
    ]
}