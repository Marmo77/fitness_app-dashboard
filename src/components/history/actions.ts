import { orderMockup, OrderProps } from "./orders";

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

const OrderList: OrderProps[] = orderMockup;


// Filtering and sorting Orders
export const FilterAndSortOrders = (searchValue: string, sortValue: string, filterOrder: "asc" | "desc") => OrderList.filter((order) => {
    const search = searchValue.toLowerCase();

    return (
        order.customerEmail.toLowerCase().includes(search) ||
        order.customerName.toLowerCase().includes(search) ||
        order.date.toLowerCase().includes(search) ||
        order.id.toLowerCase().includes(search) ||
        order.serviceName.toLowerCase().includes(search) ||
        order.serviceType.toLowerCase().includes(search) ||
        order.status.toLowerCase().includes(search) ||
        (order.customerPhone && order.customerPhone.toLowerCase().includes(search))
    );
}).sort((a, b) => {
    const valueA = a[sortValue as keyof OrderProps];
    const valueB = b[sortValue as keyof OrderProps];

    if (valueA === undefined) return filterOrder === "asc" ? 1 : -1;
    if (valueB === undefined) return filterOrder === "asc" ? -1 : 1;

    const comparison = String(valueA).localeCompare(String(valueB));

    return filterOrder === "asc" ? comparison : comparison * -1;
});