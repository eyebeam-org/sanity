// DonationWidget.js
import { MdSmartButton } from "react-icons/md"

export default {
    title: 'Application button',
    name: 'applicationButton',
    type: 'object',
    icon: MdSmartButton,
    fields: [
        {
            title: 'Size',
            name: 'size',
            type: 'string',
            options: {
                list: [
                    { title: 'Small', value: 'small' },
                    { title: 'Large', value: 'large' },
                ],
                layout: 'radio'
            },
        },
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        },
        {
            title: 'Application end date',
            name: 'applicationEndDate',
            type: 'datetime'
        },
        {
            title: 'Short text',
            name: 'shortText',
            type: 'string',
        },
        {
            title: 'longText',
            name: 'longText',
            type: 'simpleEditor',
        },

    ]
}