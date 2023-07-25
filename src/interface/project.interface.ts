interface Link {
    name: string,
    url: string
}

export default interface Project {
    name: string,
    keyword: string,
    desc?: string,
    long?: string,
    links?: Link[]
}