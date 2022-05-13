export default function resolveProductionUrl(document) {
    console.log(document)
    let type = ''

    switch (document._type) {
        case 'event':
            type = 'events'
            break
        case 'aboutPage':
            type = 'about'
            break
        case 'blogPost':
            type = 'blog'
            break
        case 'person':
            type = 'people'
            break
        case 'program':
            type = 'programs'
            break
        case 'note':
            type = 'notes'
            break
    }
    return `https://eyebeam.netlify.app/${type}/${document.slug.current}`
}