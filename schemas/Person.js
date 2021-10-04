export default {
    title: 'Person',
    name: 'person',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            title: "Role",
            name: "role",
            type: "string",
            options: {
              list: [
                { title: "Artist", value: "artist" },
                { title: "Writer", value: "writer" },
                { title: "Advisory Committee", value: "advisoryCommittee" }
              ],
            },
          },
        {
            title: 'Bio',
            name: 'bio',
            type: 'contentEditor'
        },
        {
            title: 'Website',
            name: 'website',
            type: 'url'
        },
    ]
}