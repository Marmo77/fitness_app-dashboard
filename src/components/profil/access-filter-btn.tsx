import { Crown, User2 } from "lucide-react"
import { Button } from "../ui/button"
import { FaUserGroup } from "react-icons/fa6"
import { IUserFilter } from "@/lib/AdminActions"
import Link from "next/link"

interface FilterButtonProps {
    filter_choice: IUserFilter;
    current_filter: string;
}

const AccessFilterButton = ({ filter_choice, current_filter }: FilterButtonProps) => {
    // Sprawdzamy, czy ten przycisk reprezentuje aktualnie wybrany filtr
    const isActive = filter_choice.filter === current_filter;

    return (
        <Link href={`?filter=${filter_choice.filter}`} scroll={false}>
            <Button
                className={`cursor-pointer ${isActive ? "bg-primary hover:bg-primary/90" : "bg-primary/50 hover:bg-primary/70"} ${filter_choice.filter === "everyone" ? "px-7" : "px-6"}`}
            >
                {/* scroll={false} zapobiega skakaniu strony do góry po kliknięciu */}
                {filter_choice.filter === "everyone" ? <FaUserGroup /> :
                    filter_choice.filter === "admin" ? <Crown /> :
                        <User2 />}
            </Button>
        </Link>
    )
}

export default AccessFilterButton