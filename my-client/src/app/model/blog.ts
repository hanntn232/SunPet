export class IDblog{
    id: string;
    date: string;
    title: string;
    content: {
        part1: string,
        part2: string,
        part3: string
    };
    image: {
        img1: string,
        img2: string,
        img3: string
    };
    constructor (){
        this.id = '';
        this.date='';
        this.title='';
        this.content={
            part1:'',
            part2:'',
            part3:''
        };
        this.image={
            img1:'',
            img2:'',
            img3:''
        };
    }
}
