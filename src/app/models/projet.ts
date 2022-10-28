export class Project{
    id: number;
    name: string;
    description: string;
    created: Date;
    statut: boolean;
    link: string;
    picture: string;


    constructor(
        name: string,
        description: string,
        created: Date,
        statut: boolean,
        link: string,
        picture: string,
    ){
        this.name = name;
        this.description = description;
        this.created = created;
        this.statut = statut;
        this.link = link;
        this.picture = picture;
    }
}