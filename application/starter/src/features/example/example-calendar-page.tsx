import {Calendar} from "mfront-ui";

export default function ExampleCalendarPage() {
    return (
        <div className={"flex flex-col gap-4 bg-info"}>
            <Calendar/>
            <Calendar numberOfMonths={2}/>
        </div>
    )
}