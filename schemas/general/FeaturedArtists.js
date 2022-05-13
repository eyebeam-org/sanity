
import PersonListPreview from '../../components/PersonListPreview'

export default {
    title: 'Featured Artists',
    name: 'featuredArtists',
    type: 'document',
    fields: [
                        {
                            title: 'Featured Artist 1',
                            name: 'featuredArtist1',
                            type: 'reference',
                            to: [{ type: 'person' }],
                        },
                        {
                            title: 'Featured Artist 2',
                            name: 'featuredArtist2',
                            type: 'reference',
                            to: [{ type: 'person' }],
                        },

            ],
    options: {
        disableNew: true,
    }

}
