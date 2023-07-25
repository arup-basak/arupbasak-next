'use client'

import { motion } from 'framer-motion'

export default function Page({ params }: { params: { project_name: string } }) {
    return (
        <motion.div>
            {params.project_name}
        </motion.div>
    )
}

// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts')
//         .then((res) => res.json())

//     return posts.map((post: { slug: string }) => ({
//         slug: post.slug,
//     }))
// }