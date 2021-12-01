import React from 'react'

// ICONS
import {
    MdImage,
    MdAccountCircle,
} from "react-icons/md"


const highlightRender = props => (
    <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
)

const interviewNameRender = props => (
    <span style={{ backgroundColor: 'lightgrey', fontWeight: 'bold' }}>{props.children}</span>
)

const personRender = props => (
    <span style={{ background: '#dfddd7', color: '#221f20', borderBottom: 'none' }}>{props.children}</span>
)

const columnRender = props => (
    <span style={{ background: 'rgba(255,0,0,0.2)' }}>{props.children}</span>
)

const logoBlockRender = props => (
    <div style={{ background: 'rgba(0,0,255,0.2)', padding: '15px' }}>{props.children}</div>
)

const invertedBlockRender = props => (
    <div style={{ background: 'rgba(0,0,0,0.8)', color: 'rgba(255,255,255,1)', padding: '15px' }}>{props.children}</div>
)

export default {
    type: 'object',
    name: 'contentEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        {
                            title: 'Logo block', value: 'logoBlock', blockEditor: {
                                render: logoBlockRender
                            }
                        },
                        {
                            title: 'Inverted block', value: 'invertedBlock', blockEditor: {
                                render: invertedBlockRender
                            }
                        }
                    ],
                    lists: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                        ],
                        annotations: [
                            {
                                title: 'Link',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string'
                                    }
                                ]
                            },
                            {
                                title: 'Person',
                                name: 'person',
                                type: 'object',
                                blockEditor: {
                                    icon: MdAccountCircle,
                                    render: personRender
                                },
                                fields: [
                                    {
                                        title: 'Person',
                                        name: 'link',
                                        type: 'reference',
                                        to: [{ type: 'person' }]
                                    },
                                ]
                            },
                        ]
                    },
                },
                {
                    type: 'image',
                    icon: MdImage,
                    fields: [
                        {
                            title: 'Alt text',
                            name: 'alt',
                            type: 'string',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            title: 'Caption',
                            name: 'caption',
                            type: 'simpleEditor',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            title: 'Full width',
                            name: 'fullWidth',
                            type: 'boolean',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            title: 'Cover & Crop',
                            name: 'coverAndCrop',
                            type: 'boolean',
                            options: {
                                isHighlighted: true
                            },
                        },
                        {
                            title: 'Layout',
                            name: 'layout',
                            type: 'string',
                            options: {
                                isHighlighted: true,
                                list: [
                                    { title: 'Left', value: 'left' },
                                    { title: 'Right', value: 'right' },
                                ],
                                layout: 'radio'
                            },
                        },
                    ]
                },
                // {
                //     type: 'videoBlock'
                // },
                // {
                //     type: 'audioBlock'
                // },
                {
                    type: 'embedBlock'
                },
                {
                    type: 'columnsBlock'
                },
                {
                    type: 'dividerBlock'
                },
                {
                    type: 'donationWidget'
                },
            ]
        }
    ]
}