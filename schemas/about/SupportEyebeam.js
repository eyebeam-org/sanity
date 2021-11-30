// ICONS
import {
    MdArticle,
} from "react-icons/md"

export default {
    title: 'Support Eyebeam',
    name: 'supportEyebeam',
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
            title: 'Introduction',
            name: 'introduction',
            type: 'simpleEditor'
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
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
        },
        {
            title: 'Donate text',
            name: 'donateText',
            type: 'simpleEditor'
        },
        {
            title: 'Our Supporters',
            name: 'ourSupporters',
            type: 'simpleEditor'
        },
        {
            title: 'Additional acknowledgements',
            name: 'additionalText',
            type: 'simpleEditor'
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