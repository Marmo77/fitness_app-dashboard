import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Fuel, Gauge, Settings2, MapPin } from 'lucide-react';

const mockupData = {
    id: "1",
    make: "Audi",
    model: "A6 Avant",
    year: 2020,
    price: 125900,
    mileage: 145000,
    fuel: "Diesel",
    engine: "2.0 TDI 204KM",
    transmission: "Automatyczna",
    location: "Szczecin",
    imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop"
};

const CarCard = () => {
    // if user is admin show 3 btn else show 1 btn(details)
    const isAdmin = false;

    const formattedPrice = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
        maximumFractionDigits: 0
    }).format(mockupData.price);

    return (
        <Card className="flex p-0 flex-col sm:flex-row overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group bg-card">

            <div className="relative w-full sm:w-2/5 h-56 sm:h-auto shrink-0 overflow-hidden bg-muted">
                <Image
                    src={mockupData.imageUrl}
                    alt={`${mockupData.make} ${mockupData.model}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground text-xs px-2.5 py-1 rounded-md flex items-center gap-1 font-medium shadow-sm">
                    <MapPin className="w-3 h-3 text-primary" />
                    {mockupData.location}
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <CardContent className="p-5 pb-4 flex-1 flex flex-col justify-start">
                    <div className="flex justify-between items-start gap-4 mb-4">
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-foreground line-clamp-1">
                                {mockupData.make} {mockupData.model}
                            </h2>
                            <p className="text-sm text-muted-foreground mt-0.5">
                                {mockupData.engine}
                            </p>
                        </div>
                        <div className="text-right shrink-0">
                            <span className="text-xl font-bold text-primary">
                                {formattedPrice}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-auto">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarDays className="w-4 h-4 shrink-0 text-foreground/60" />
                            <span>{mockupData.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Gauge className="w-4 h-4 shrink-0 text-foreground/60" />
                            <span>{mockupData.mileage.toLocaleString('pl-PL')} km</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Fuel className="w-4 h-4 shrink-0 text-foreground/60" />
                            <span>{mockupData.fuel}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Settings2 className="w-4 h-4 shrink-0 text-foreground/60" />
                            <span>{mockupData.transmission}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="p-5 pt-0 mt-auto flex flex-col gap-2">
                    <Button variant={isAdmin ? "outline" : "default"} className="w-full">
                        Szczegóły pojazdu
                    </Button>

                    {isAdmin && (
                        <div className="grid grid-cols-2 gap-2 w-full">
                            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                                Edytuj
                            </Button>
                            <Button variant="destructive" className="w-full transition-colors">
                                Usuń
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </div>
        </Card>
    );
};

export default CarCard;