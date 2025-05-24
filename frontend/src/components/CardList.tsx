import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";


const popularContent = [
    {
        id: 1,
        title: "JavaScript Tutorial",
        badge: "Coding",
        image:
            "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.194998336.1747677868&semt=ais_hybrid",
        count: 4300,
    },
    {
        id: 2,
        title: "Top Linux Distros",
        badge: "Tech",
        image:
            "https://cdn-icons-png.freepik.com/256/6124/6124995.png?ga=GA1.1.194998336.1747677868&semt=ais_hybrid",
        count: 3200,
    },
    {
        id: 3,
        title: "We Will Get Replaced",
        badge: "AI",
        image:
            "https://cdn-icons-png.freepik.com/256/5278/5278402.png?ga=GA1.1.194998336.1747677868&semt=ais_hybrid",
        count: 2400,
    },
    {
        id: 4,
        title: "React Hooks Explained",
        badge: "Coding",
        image:
            "https://cdn-icons-png.freepik.com/256/753/753244.png?ga=GA1.1.194998336.1747677868&semt=ais_hybrid",
        count: 1500,
    },
    {
        id: 5,
        title: "C Programming Language",
        badge: "Coding",
        image:
            "https://cdn-icons-png.freepik.com/256/9345/9345668.png?ga=GA1.1.194998336.1747677868&semt=ais_hybrid",
        count: 1200,
    },
];

const latestTransactions = [
    {
        id: 1,
        title: "Subscription Renewal",
        badge: "Crypto Bot",
        image:
            "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600",
        count: 1400,
    },
    {
        id: 2,
        title: "Payment for Services",
        badge: "Robot Boxer",
        image:
            "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
        count: 2100,
    },
    {
        id: 3,
        title: "Subscription Renewal",
        badge: "Angry LLM",
        image:
            "https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=600",
        count: 1300,
    },
    {
        id: 4,
        title: "Payment for Services",
        badge: "Jamalbee",
        image:
            "https://images.pexels.com/photos/185725/pexels-photo-185725.jpeg?auto=compress&cs=tinysrgb&w=600",
        count: 2500,
    },
    {
        id: 5,
        title: "Subscription Renewal",
        badge: "Arch Users",
        image:
            "https://images.pexels.com/photos/1568804/pexels-photo-1568804.jpeg?auto=compress&cs=tinysrgb&w=600",
        count: 1400,
    },
];

function CardList({title}: {title:string}) {

    const list = title === "Popular Content" ? popularContent : latestTransactions;

    return (
        <div>
            <h1 className="text-lg font-medium mb-4">{title}</h1>
            <div className="flex flex-col gap-2">
                {list.map((item) =>
                    <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image sizes="100,100" src={item.image} alt={item.title} fill className="object-cover"/>
                        </div>
                        <CardContent className="p-0 flex-1">
                            <CardTitle className="text-sm font-normal">
                                {item.title}
                            </CardTitle>
                            <Badge variant="secondary">{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">
                            {item.count/1000}K
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default CardList;