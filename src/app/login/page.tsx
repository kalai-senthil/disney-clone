"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FetchResult } from "../../../typings";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
export const loginFormSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6).max(15),
});
function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const res = await fetch("api/auth/login", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = (await res.json()) as FetchResult<null, { code: number }>;
    console.log(data);

    if (data.success) {
      toast({ title: data.message, variant: "default" });
      // redirect("/")
    } else {
      if (data?.error && data?.error.code === 401) {
        toast({ title: "User does not exist", variant: "destructive" });
        router.push("/register");
      }
    }
  }
  return (
    <section className="max-w-xl mx-auto h-full mt-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col bg-gray-900/50 p-2 rounded-lg drop-shadow-lg"
        >
          <FormField
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
            name="email"
          />
          <FormField
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
            name="password"
          />
          <Button className="self-end" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default LoginPage;
