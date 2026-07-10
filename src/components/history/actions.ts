// Sort Options
export const SortOptions: { value: string, label: string }[] = [
    { value: "id", label: "ID" },
    { value: "date", label: "Data" },
    { value: "service", label: "Typ usługi" },
    { value: "status", label: "Status" }
]


// Cancel all filtering (reset state)
export async function cancelFiltering(setSearchValue: (value: string) => void, setSortValue: (value: string) => void, setFilterOrder: (value: "asc" | "desc") => void) {
    setSearchValue("");
    setSortValue("date");
    setFilterOrder("asc");
}
