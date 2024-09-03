import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useList } from "@/zustand/store";

const FormSchema = z.object({
    username: z.string(),
  })


export const Search = () => {

    const { listByName, load } = useList();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        if(data.username.length === 0){
            load();
        }
        listByName(data.username);
        data.username = "";
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex items-center">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className='mr-4' placeholder="Radio name ..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="mx-4">
                <Button onClick={() => { }} type="submit">
                    <SearchIcon className="mr-2" />
                    Search
                </Button>
                </div>
            </form>
        </Form>
        /*
        <div className="space-between flex items-center">
            <Input className='mr-4' type="email" placeholder="Radio name" />
            <div className="ml-auto mr-4">
                <Button onClick={() => { }} type="submit">
                    <SearchIcon className="mr-2" />Search</Button>
            </div>
        </div>*/
    );
} 