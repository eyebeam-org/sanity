// ICONS
import {
    MdLocationCity
} from "react-icons/md"

export default {
    title: 'Cities',
    name: 'cities',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Cities',
            name: 'cities',
            type: 'array',
            of: [
                {
                    title: 'City',
                    name: 'city',
                    type: 'object',
                    icon: MdLocationCity,
                    fields: [
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            title: 'Country',
                            name: 'country',
                            type: 'string'
                        }
                    ]
                },
            ]
        },
    ]
}