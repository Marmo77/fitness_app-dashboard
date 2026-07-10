import { useState } from "react";

// Cancel all filtering (reset state)
export async function cancelFiltering(setSearchValue: (value: string) => void, setSortValue: (value: string) => void, setFilterOrder: (value: string) => void) {
    setSearchValue("");
    setSortValue("date");
    setFilterOrder("asc");
}

// Search for orders

// export async function searchOrders(searchValue: string)



// Sorting in order

export const SortOptions: { value: string, label: string }[] = [
    { value: "id", label: "ID" },
    { value: "date", label: "Data" },
    { value: "serviceType", label: "Typ usługi" },
    { value: "status", label: "Status" }
]


// export async function sortOrders(sortValue: string) {
//     switch (sortValue) {
//         case "id":
//             return { id: "asc" | "desc" };
//         case "date":
//             return { date: "asc" | "desc" };
//         case "serviceType":
//             return { serviceType: "asc" | "desc" };
//         case "status":
//             return { status: "asc" | "desc" };
//         default:
//             return { id: "desc" };
//     }
// }

// Ascending or Descending Sorting order type
