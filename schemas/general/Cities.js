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
                        },
                        {
                            title: 'Timezone',
                            name: 'timezone',
                            description: 'tz database time zone name. See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones',
                            type: 'string'
                        }
                    ]
                },
            ]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'simpleEditor'
        }
    ]
}