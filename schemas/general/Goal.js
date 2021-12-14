// ICONS
import {
    MdFlag
} from "react-icons/md"


export default {
    title: 'Goal',
    name: 'goal',
    icon: MdFlag,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
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
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
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