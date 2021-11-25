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
      title: 'First Name',
      name: 'firstName',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Last Name',
      name: 'lastName',
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
          { title: "Advisory Committee", value: "advisoryCommittee" }
        ],
      },
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'string'
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
      title: 'First engagement with Eyebeam',
      name: 'firstEngagement',
      type: 'number'
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
  ]
}