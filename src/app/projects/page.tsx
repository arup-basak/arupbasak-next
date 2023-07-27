import React from 'react'
import ProjectInterface from '@/interface/project.interface'
import Project from '@/components/Project'

const dataset: ProjectInterface[] = [
    {
        "name": "Project 1",
        "desc": "Description of Project 1",
        "long": "Longer description of Project 1",
        "keyword": "projectone",
        "links": [
            {
                "name": "Link 1",
                "url": "https://www.example.com/link1"
            },
            {
                "name": "Link 2",
                "url": "https://www.example.com/link2"
            }
        ]
    },
    {
        "name": "Project 2",
        "desc": "Description of Project 2",
        "long": "Longer description of Project 2",
        "keyword": "projectone",
        "links": [
            {
                "name": "Link 3",
                "url": "https://www.example.com/link3"
            }
        ]
    },
    {
        "name": "Project 3",
        "keyword": "projectone",
        "desc": "Description of Project 3"
    },
    {
        "name": "Project 4",
        "keyword": "projectone",
        "desc": "Description of Project 3"
    },
    {
        "name": "Project 5",
        "keyword": "projectone",
        "desc": "Description of Project 3"
    },
    {
        "name": "Project 6",
        "keyword": "projectone",
        "desc": "Description of Project 3"
    },
    {
        "name": "Project 7",
        "keyword": "projectone",
        "desc": "Description of Project 3"
    },
    {
        "name": "Project 8",
        "keyword": "projectone",
        "desc": "Description of Project 3"
    },
]


const Page = () => {
    return (
        <div>
            {/* <Heading text='Projects.'/> */}
            <div className='mx-auto w-3/5'>
                {
                    dataset.map((item, key) => {
                        return (
                            <Project
                                key={key}
                                data={item}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Page