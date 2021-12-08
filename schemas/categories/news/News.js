// ICONS
import {
    MdStar,
} from "react-icons/md"

export default {
    title: 'News',
    icon: MdStar,
    name: 'news',
    type: 'document',
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
                    name: 'caption',
                    type: 'simpleEditor',
                    title: 'Caption',
                }
            ]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'string'
        },
        {
            title: 'Source',
            name: 'source',
            type: 'string'
        },
        {
            title: 'External link',
            name: 'externalLink',
            type: 'url'
        },
        {
            title: 'PDF File',
            name: 'pdfFile',
            type: 'file'
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
                    to: [{ type: 'person' }]
                },
            ]
        },
        {
            title: 'Internal links',
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