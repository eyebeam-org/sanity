export default {
    title: 'Contact',
    name: 'contact',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Address',
            name: 'address',
            type: 'string'
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string'
        },
        {
            title: 'Phone number',
            name: 'phoneNumber',
            type: 'string'
        },
        {
            title: 'Tagline',
            name: 'tagline',
            type: 'string'
        },
    ]
}