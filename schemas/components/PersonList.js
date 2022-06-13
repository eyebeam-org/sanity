// Faq.js
import { MdPeople } from "react-icons/md"
import PersonListPreview from '../../components/PersonListPreview'

export default {
    title: 'Person List',
    name: 'personList',
    type: 'object',
    icon: MdPeople,
    fields: [
        {
            title: 'Persons',
            name: 'persons',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'person',
                    fields: [
                        {
                            title: 'Person',
                            name: 'personLink',
                            type: 'reference',
                            to: [{ type: 'person' }]
                        },
                        {
                            title: 'Role',
                            description: 'Optional',
                            name: 'role',
                            type: 'string'
                        },
                    ],
                    preview: {
                        select: {
                            title: 'personLink.title',
                            role: 'role'
                        },
                        prepare(selection) {
                            const { title, role } = selection
                            return {
                                title: title,
                                subtitle: role
                            }
                        }
                    }
                }
            ]
        },
    ],
    preview: {
        select: {
            persons: 'persons'
        },
        component: PersonListPreview
    }
}
