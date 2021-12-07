// ICONS
import {
    MdVideocam
} from "react-icons/md"

export default {
    title: 'Video',
    icon: MdVideocam,
    name: 'videoPost',
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
            title: 'Url',
            name: 'url',
            type: 'url'
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
            title: 'See also',
            name: 'seeAlso',
            type: 'seeAlso'
        }
    ]
}