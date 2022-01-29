import { useState } from "react"
import { Card } from 'antd';
import { useRouter } from "next/router";
import Image from 'next/image'
export default function Features(){
    const router = useRouter();
    const [features, setFeatures] = useState([
        {
            id: 1,
            head: 'Technology varieties',
            image: '/images/var.svg',
            desc: 'Our developers cover varieties of technology, from JS to JAVA, Python'
        },
        {
            id: 2,
            head: 'Learn from experts',
            image: '/images/experts.svg',
            desc: 'Our developers go through a strict application and vetting process, leaving only the best.'
        },
        {
            id: 3,
            head: 'Convinience',
            image: '/images/girl.svg',
            desc: 'Choose days and time convinent for you to interact online with our developers to start learning.'
        }
    ])
    return (
        <div className="flex flex-wrap justify-center rounded-sm">
        {
            features.map(feature => (
                <Card onClick={() => router.push("https://code2hero.vercel.app/")} style={{backgroundColor: 'transparent', borderColor : "#1d4ed8", borderRadius : 30,  width: 350, margin: 5, fontFamily:'Raleway, sans-serif' }} bordered={true} className='shadow-md shadow-xl shadow-blue-500/50 cursor-pointer rounded-xl flex flex-col justify-center items-center' key={feature.id}>
                    <Image src={feature.image} height='150' width='250' />
                    <p className='text-lg text-center mt-4 text-gray-500 font-semibold'>{feature.head}</p>
                    <p className='text-md text-center mt-4 text-gray-500 '>{feature.desc}</p>
                </Card>
            ))
        }
    </div>  
    )
}