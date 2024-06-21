export interface categoria { id: number, name: string }


export interface suenioProps {
    id: number
    active: boolean
    story: string
    edited: boolean,
    anonymous: boolean,
    creationDate: string
    imagesDream: [],
    comments: [],
    likeDreams: [],
    categories: [
        categoria
    ]
}
