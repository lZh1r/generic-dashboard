'use client';

import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {Calendar} from "@/components/ui/calendar";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {formatDate} from "date-fns";
import {Calendar1} from "lucide-react";

const tasks = [
    'Do the thing',
    'Do another thing',
    'Code 300 lines',
    'Walk a dog',
    'Eat food',
    'Breath air',
    'Meditate',
    'Gamble everything away'
];

function TodoList() {

    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-lg font-medium">Todo list</h1>
                <Popover>
                    <PopoverTrigger className="mb-4" asChild>
                        <Button variant="outline">
                            <Calendar1/>
                            {date ? formatDate(date, 'PPP') : <span>Pick a Date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow"
                        />
                    </PopoverContent>
                </Popover>
            </div>


            <ScrollArea className="max-h-[500px] overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {tasks.map((item) =>
                        <Card className="p-4" key={item}>
                            <CardContent>
                                <div className="flex flex-row gap-3 items-center flex-1">
                                    <Checkbox id="item1"/>
                                    <label htmlFor="item1">{item}</label>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>


            </ScrollArea>
        </div>
    );
}

export default TodoList;