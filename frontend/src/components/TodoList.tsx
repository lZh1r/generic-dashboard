'use client';

import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";

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

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h1 className="text-lg font-medium">Todo list</h1>
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