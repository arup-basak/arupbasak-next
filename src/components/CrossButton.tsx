import React from 'react'
import Image from 'next/image'

interface Props {
    onClick: () => void
}

const CrossButton = (props: Props) => {
    return (
        <div className='border border-black w-fit p-2 rounded-full cursor-pointer' onClick={props.onClick}>
            <Image
                alt='Cross'
                src="/close.svg"
                height={20}
                width={20}
            />
        </div>
    )
}

export default CrossButton