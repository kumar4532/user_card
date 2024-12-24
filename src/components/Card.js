import React from 'react'

const Card = ({ user }) => {
    const { name, phone, gender, picture } = user;

    return (
        <div className='p-6 bg-white'>
            <div className='flex flex-row gap-10 border-4 border-black p-8 bg-white'>
                <div>
                    <img
                        src={picture.large}
                        alt={name.first}
                        width={180}
                        height={180}
                        className='rounded-xl'
                    />
                </div>
                <div className='flex flex-col space-y-4 mt-1'>
                    <div className='flex flex-row gap-2 text-2xl font-extrabold'>
                        <div><span>{name.title}. </span>{name.first}</div>
                        <div>{name.last}</div>
                    </div>
                    <div className='text-xl font-semibold'>{gender}</div>
                    <div className='text-lg font-medium '>{phone}</div>
                </div>
            </div>
        </div>
    )
}

export default Card