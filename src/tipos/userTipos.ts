export interface userProps {
    id: number,
    name: string,
    lastName: string,
    email: string,
    nickName: string,
    imageProfile: string,
    creationDate: string,
    borderColorImg: "default" | "primary" | "secondary" | "success" | "warning" | "danger",
    postDreams: [],
    comments: [],
    likeDreams: []
}