// ICONS
import { MdVideocam } from "react-icons/md"

export default {
    name: 'videoBlock',
    type: 'object',
    title: 'Video',
    icon: MdVideocam,
    fields: [
        {
            name: 'videoPost',
            title: 'Video Post',
            type: 'reference',
            to: [{ type: 'videoPost' }]
        },
    ]
}