'use client'

import CrossButton from '@/components/CrossButton'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { project_name: string } }) {
    const router = useRouter()
    return (
        <div>
            <motion.div
                initial={{
                    y: 50,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                className='rounded-2xl backdrop-blur-sm backdrop-brightness-110 m-5 h-screen p-4'>
                <div className='w-full flex justify-end'>
                    <CrossButton onClick={() => router.push("/projects")}/>
                </div>

                <div className='text-xl'>
                    Will Updated Soon
                </div>
            </motion.div>
        </div>
    )
}

// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts')
//         .then((res) => res.json())

//     return posts.map((post: { slug: string }) => ({
//         slug: post.slug,
//     }))
// }