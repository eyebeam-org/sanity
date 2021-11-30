// ICONS
import {
    MdArticle,
} from "react-icons/md"

export default {
    title: 'What is Eyebeam?',
    name: 'whatIsEyebeam',
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
        }
    ]
}
