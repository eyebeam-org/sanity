// ICONS
import {
    MdGroups
} from "react-icons/md"


export default {
    title: 'Program',
    icon: MdGroups,
    name: 'program',
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
            title: 'Open for applications',
            name: 'applicationsOpen',
            type: 'boolean'
        },
        {
            title: 'Application period end date',
            name: 'applicationEndDate',
            type: 'datetime',
            hidden: ({ document }) => !document?.applicationsOpen
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
            title: 'See also',
            name: 'seeAlso',
            type: 'seeAlso'
        }
    ]
}