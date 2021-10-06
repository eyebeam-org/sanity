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
            fields: [
                {
                  name: 'caption',
                  type: 'simpleEditor',
                  title: 'Caption',
                },
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
            ]
        },
        {
            title: "Role",
            name: "role",
            type: "string",
            options: {
              list: [
                { title: "Artist", value: "artist" },
                { title: "Staff", value: "staff" },
                { title: "Board", value: "board" },
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
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
              source: 'name'
          },
          validation: Rule => Rule.required()
      },
    ]
}