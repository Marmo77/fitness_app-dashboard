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
import { SortOptions } from '@/app/(main)/historia/actions'
import ToolTipWrapper from '../ToolTipWrapper'

type HistoryFiltersProps = {
    searchValue: string;
    setSearchValue: (value: string) => void;
    sortValue: string;
    setSortValue: (value: string) => void;
    filterOrder: "asc" | "desc";
    setFilterOrder: (value: "asc" | "desc") => void;
    handleApplyFilter: () => void;
    handleResetFilters: () => void; // <--- Nowa funkcja do czyszczenia
}

const HistoryFilters = ({
    searchValue, setSearchValue,
    sortValue, setSortValue,
    filterOrder, setFilterOrder,
    handleApplyFilter, handleResetFilters
}: HistoryFiltersProps) => {

    const handleOrderFilter = () => {
        setFilterOrder(filterOrder === "asc" ? "desc" : "asc");
    }

    return (
        <Card className="p-4 flex lg:flex-row items-start lg:items-center gap-4 relative">
            <h3 className='text-[15px] lg:text-left self-center text-muted-foreground font-semibold pl-2'>Filtruj:</h3>
            <div className='relative max-w-[300px] w-full'>
                <Input placeholder="Szukaj..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className='flex flex-row items-center gap-2'>
                <p className='font-semibold'>Sortuj: </p>
                <Select value={sortValue} items={SortOptions} onValueChange={(val) => setSortValue(val || "date")}>
                    <SelectTrigger className="w-[140px] cursor-pointer">
                        <SelectValue placeholder="Wybierz..." />
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
                <ToolTipWrapper message={filterOrder === "asc" ? "Rosnąco" : "Malejąco"} side='top'>

                    <Button onClick={handleOrderFilter} className="cursor-pointer">
                        {filterOrder === "asc" ? <ArrowUp /> : <ArrowDown />}
                    </Button>
                </ToolTipWrapper>
            </div>

            <div className='grid grid-cols-2 lg:flex w-full lg:w-auto gap-3'>
                <ToolTipWrapper message='Wyszukaj' side="top">
                    <Button onClick={handleApplyFilter} variant="ghost" className='border-border w-full lg:w-auto hover:border-primary hover:bg-primary/10 duration-300 transition-all cursor-pointer'>
                        <FaMagnifyingGlass />
                    </Button>
                </ToolTipWrapper>
                <ToolTipWrapper message='Resetuj Filtry' side="top">
                    <Button onClick={handleResetFilters} variant="ghost" className='border-border hover:border-destructive hover:bg-destructive/10 duration-300 w-full lg:w-auto transition-all cursor-pointer'>
                        <X />
                    </Button>
                </ToolTipWrapper>
            </div>
        </Card>
    )
}

export default HistoryFilters;