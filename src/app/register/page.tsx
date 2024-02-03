"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, useFormState } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { FetchResult } from "../../../typings";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginFormSchema } from "@/lib/schema";

function RegisterPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isLoading } = useFormState({ control: form.control });
  const { toast } = useToast();
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const res = await fetch("api/auth/register", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = (await res.json()) as FetchResult<null, { code: number }>;
    console.log(data);

    if (data.success) {
      toast({ title: data.message, variant: "default" });
      router.push("/");
    } else {
      if (data?.error && data?.error.code === 401) {
        toast({ title: "User does not exist", variant: "destructive" });
        router.push("/register");
      }
    }
  }
  return (
    <section className="max-w-xl flex flex-col gap-4 mx-auto h-full mt-20">
      <Label className="text-6xl font-bold">Register</Label>
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
            {isLoading ? "Register..." : "Register"}
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default RegisterPage;
