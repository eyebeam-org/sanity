// ICONS
import {
    MdDescription
} from "react-icons/md"


export default {
    title: 'Journal Post',
    icon: MdDescription,
    name: 'journalPost',
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
            title: 'Date published',
            name: 'pubDate',
            type: 'date',
            initalValue: new Date().getDate()
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Sub title',
            name: 'subtitle',
            type: 'string',
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
                    to: [{ type: 'person' }]
                },
            ]
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
