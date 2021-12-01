// DonationWidget.js
import { MdPayment } from "react-icons/md"

export default {
    title: 'Donation widget',
    name: 'donationWidget',
    type: 'object',
    icon: MdPayment,
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        }
    ]
}