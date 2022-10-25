export class Project{
    id: number;
    name: string;
    description: string;
    created: Date;
    statut: boolean;
    link: string;
    picture: string;
    createdAt: Date;

    constructor(
        id: number,
        name: string,
        description: string,
        created: Date,
        statut: boolean,
        link: string,
        picture: string,
        createdAt: Date,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.created = created;
        this.statut = statut;
        this.link = link;
        this.picture = picture;
        this.createdAt = createdAt;
    }
}