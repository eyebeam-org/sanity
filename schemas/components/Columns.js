// Columns.js
import { MdViewColumn } from "react-icons/md"

export default {
    title: 'Columns',
    name: 'columnsBlock',
    type: 'object',
    icon: MdViewColumn,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Column content',
            name: 'columnContent',
            type: 'contentEditor',
        },
    ]
}