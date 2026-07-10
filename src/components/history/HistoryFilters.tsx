import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { X } from 'lucide-react'
import { Button } from '../ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type HistoryFiltersProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
    sortValue: string;
    setSortValue: (value: string) => void;
}

const SortOptions: { value: string, label: string }[] = [
    { value: "id", label: "ID" },
    { value: "date", label: "Data" },
    { value: "serviceType", label: "Typ usługi" },
    { value: "status", label: "Status" }
]

const HistoryFilters = ({ searchValue, setSearchValue, sortValue, setSortValue }: HistoryFiltersProps) => {
    return (
        <Card className="w-fit p-4 flex flex-row items-center gap-4 relative">
            <div className='relative max-w-[300px]'>
                <Input placeholder="Szukaj..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className='flex flex-row items-center gap-2'>
                <p>Sortuj: </p>
                <Select value={sortValue} items={SortOptions} onValueChange={(value) => setSortValue(value as string)}>
                    <SelectTrigger className="w-[150px]">
                        {/* W tym miejscu jest błąd. Nie ma komponentu SelectValue w bibliotece Shadcn UI. */}
                        <SelectValue placeholder={sortValue || "Wybierz..."} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {SortOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            {/* Control buttons */}
            <div>

                <Button variant="ghost" className='ml-auto border-border'>
                    <X />
                </Button>
            </div>

        </Card>
    )
}

export default HistoryFilters