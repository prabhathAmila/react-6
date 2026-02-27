import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
export default function TodoList() {
    return (
        <>
            <h1>Hedy Lamarr&apos;s Todos</h1>
            <Image
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
                width={150}
                height={150}
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <div className="flex gap-4">
                <Button className="bg-black capitalize text-lg font-bold">Learn more</Button>
                <Button variant="outline">Click Here</Button>
                <Button variant="outline" size="icon" area-label="Submit">
                    <ArrowUpIcon />
                </Button>
                <Button variant="destructive">Click Here</Button>
                <Button variant="secondary">Click Here</Button>
                <Button variant="ghost">Click Here</Button>
                <Button variant="link">Click Here</Button>
                <Button variant="outline" size="icon" area-label="Submit">
                    <ArrowDownIcon />
                </Button>

            </div>
        </>
    );
}