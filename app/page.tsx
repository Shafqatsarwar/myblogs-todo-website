import Link from "next/link";
import { Button } from "@/components/ui/button";
import{ChevronRight, Mail, Loader2} from"lucide-react";
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label";
import ProfileModal from "@/components/ProfileModal";

export default function Home() {
    return(
        <main className="flex flex-col items-centre p-24">
            <Link href={"/blogs"} className="text-xl font-bold text-blue-500">
                Blogs App </Link>
                <Link href={"/todo"} className="text-xl font-bold text-blue-500">
                    Todo App </Link>
                    <Link href={"/contact-us"} className="text-xl font-bold text-blue-500">
                        Contact Us</Link>
                        <div className="text-xl text-red-300 font-semibold">Hello Batch 47 Quarter 02</div>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
                            Taxing Laughter: The joke Tax chronicles </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-10">
                                The king </p>
                                <div className="flex gap-5">
                                    <Button> Primary </Button>
                                    <Button variant= "secondary"> Second </Button>
                                    <Button variant="destructive"> Destructive </Button>
                                    <Button variant="outline" size="icon">
                                        <ChevronRight className="h-4 w-4"/>
                                    </Button>
                                    <Button> <Mail className="mr-2 h-4 w-4"/> 
                                    Login with Email id </Button>
                                    <Button disabled> <Loader2 className="mr-2 h-4 w-4 animate-spin"/> 
                                    Please Wait Loading</Button>
                                </div>
                                <div className="bg-neutral-200 mt-20 space-y-10">
                                    <Input placeholder="Valid Email" />
                                    <div>
                                        <Label htmlFor="email"> Email </Label>
                                        <Input type="email" id="email" placeholder="Email with Label id"/>
                                    </div>
                                </div>
        </main>
    );
};