import React from 'react'
import PropTypes from 'prop-types'

export const toPlainText = (blocks = []) => {
    return (
        blocks
            .map(block => {
                if (block._type !== 'block' || !block.children) {
                    return ''
                }
                return block.children.map(child => child.text).join('')
            })
            .join('\n\n')
    )
}

function PersonList(props) {
    const list = props.list;
    const listItems = list.map((item) =>
        <div>
            <div style={{ fontSize: '0.8em', fontStyle: 'italic', padding: '15px', marginBottom: '5px', marginTop: '5px', borderTop: '1px solid black' }}>
                {item.personLink ? item.personLink._ref : ''}{item.role ? ', ' + item.role : ''}
            </div>
        </div>);
    return (
        <div>
            {listItems}
        </div>
    );
}

export default class PersonListPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props

        console.log('value', value)

        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>Person List</div >
                <PersonList list={value.persons != undefined && value.persons.length > 0 ? value.persons : []} />
            </div >
        )
    }
}

