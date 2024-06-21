export interface userProps {
    id: number,
    email: string,
    nickName: string,
    imageProfile: string,
    creationDate: string,
    borderColorImg: "default" | "primary" | "secondary" | "success" | "warning" | "danger",
    postDreams: [],
    comments: [],
    likeDreams: {
        id: number;
        likeDate: string;
        likesType: "LIKE" | "DISLIKE";
    }[]
}