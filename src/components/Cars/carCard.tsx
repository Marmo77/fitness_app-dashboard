import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';

const CarCard = () => {
    // if user is admin show 3 btn else show 1 btn(details)
    const isAdmin = false;
    return (
        <Card className='shadow-lg max-w-[800px] pt-0 pl-0'>
            <CardHeader className='flex flex-row gap-4 p-0'>

                <Image src="/images/car1.jpg" className='ml-0' alt="Car" width={400} height={200} />
                <div className='flex flex-col gap-2 bg-background/50'>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className='flex flex-col gap-2 bg-background/50'>
                <Button className="w-full">Szczegóły</Button>
                {isAdmin && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'>
                        <Button className="w-full bg-blue-400 hover:bg-blue-600 cursor-pointer">Edytuj</Button>
                        <Button className="w-full bg-destructive hover:bg-red-600 cursor-pointer">Usuń</Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    )
}

export default CarCard