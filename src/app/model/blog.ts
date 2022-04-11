export interface IDblog{
    id: string,
    date: string,
    title: string,
    content: {
        part1: string,
        part2: string,
        part3: string
    },
    image: {
        img1: string,
        img2: string,
        img3: string
    }
}
