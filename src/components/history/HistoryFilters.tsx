import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { ArrowDown, ArrowUp, X } from 'lucide-react'
import { Button } from '../ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cancelFiltering, SortOptions } from './actions'

type HistoryFiltersProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
    sortValue: string;
    setSortValue: (value: string) => void;
    filterOrder: "asc" | "desc";
    setFilterOrder: (value: "asc" | "desc") => void;
    handleApplyFilter: () => void;
}


const HistoryFilters = ({ searchValue, setSearchValue, sortValue, setSortValue, filterOrder, setFilterOrder, handleApplyFilter }: HistoryFiltersProps) => {


    const handleOrderFilter = () => {
        setFilterOrder(filterOrder === "asc" ? "desc" : "asc");
    }

    return (
        <Card className="w-fit p-4 flex flex-row items-center gap-4 relative">
            <div className='relative max-w-[300px]'>
                <Input placeholder="Szukaj..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className='flex flex-row items-center gap-2'>
                <p>Sortuj: </p>
                <Select value={sortValue} items={SortOptions} onValueChange={(value) => setSortValue(value as string)}>
                    <SelectTrigger className="w-[150px]">
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
                <Button onClick={handleOrderFilter} className={"cursor-pointer"}>
                    {filterOrder === "asc" ? <ArrowUp /> : <ArrowDown />}
                </Button>
            </div>
            {/* Control buttons */}
            <div className='flex-1 flex justify-end items-end gap-3'>
                <Button variant="ghost" onClick={handleApplyFilter} className='border-border hover:border-primary hover:bg-primary/10 duration-300 transition-all cursor-pointer'>
                    <FaMagnifyingGlass />
                </Button>
                <Button
                    onClick={() => cancelFiltering(setSearchValue, setSortValue, setFilterOrder)}
                    variant="ghost"
                    className='border-border hover:border-destructive hover:bg-destructive/10 duration-300 transition-all cursor-pointer'>
                    <X />
                </Button>
            </div>

        </Card>
    )
}

export default HistoryFilters