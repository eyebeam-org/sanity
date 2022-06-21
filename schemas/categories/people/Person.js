// ICONS
import {
  MdAccountCircle
} from "react-icons/md"

export default {
  title: 'Person',
  icon: MdAccountCircle,
  name: 'person',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
    },
    {
      title: 'Last Name',
      name: 'lastName',
      type: 'string',
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: 'image',
      fields: [
        {
          title: 'Alt text',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'caption',
          type: 'simpleEditor',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
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
          { title: "Advisory Committee", value: "advisoryCommittee" }
        ],
      },
    },
    {
      title: "Group tags",
      name: "groupTags",
      type: 'tags'
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'text'
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'simpleEditor'
    },
    {
      title: 'Short bio',
      name: 'shortBio',
      type: 'simpleEditor'
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url'
    },
    {
      title: 'First engagement with Eyebeam',
      name: 'firstEngagement',
      type: 'number'
    },
    {
      title: 'Resident type',
      name: 'residentType',
      type: 'string',
    },
    {
      title: 'Internal links',
      description: 'Shown in the See also section of the page.',
      name: 'internalLinks',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'reference',
          to: [{ type: 'person' }, { type: 'note' }, { type: 'news' }, { type: 'press' }, { type: 'journalPost' }, { type: 'program' }, { type: 'project' }, { type: 'videoPost' }, { type: 'event' }]
        },
      ]
    },
    {
      title: 'External links',
      description: 'Shown in the See also section of the page.',
      name: 'externalLinks',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'object',
          fields: [
            {
              title: 'Link text',
              name: 'linkText',
              type: 'string',
            },
            {
              title: 'Link URL',
              name: 'linkUrl',
              type: 'url',
            }
          ]
        },
      ]
    },
    {
      title: 'Connected Open Eyebeam room',
      description: 'Slug of the room (without the "#")',
      name: 'openEyebeamRoom',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: "Title",
      name: "title",
      by: [{ field: "title", direction: "asc" }],
    },
  ]
}
