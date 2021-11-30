// ICONS
import {
    MdComment
} from "react-icons/md"

export default {
    title: 'Statement',
    name: 'statement',
    icon: MdComment,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Date',
            name: 'date',
            type: 'datetime'
        },

        {
            title: 'Content',
            name: 'content',
            type: 'simpleEditor'
        },
        {
            title: 'Person',
            name: 'person',
            type: 'reference',
            to: [{ type: 'person' }]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        }
    ]
}