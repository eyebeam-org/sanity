export default {
    title: 'About',
    name: 'about',
    type: 'document',
    // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Sub-sections',
            name: 'subSections',
            type: 'array',
            of: [
                {
                    title: 'Sub section',
                    name: 'subSection',
                    type: 'reference',
                    to: [{type: 'aboutPage'}]
                },
            ]
        },
    ]
}
