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
                    name: 'caption',
                    type: 'simpleEditor',
                    title: 'Caption',
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
            title: 'See also',
            name: 'seeAlso',
            type: 'seeAlso'
        }
    ]
}