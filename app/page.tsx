"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import InputPassword from "@/components/ui/input-password";
import Link from "next/link";
import Google from "@/assets/google";
import Vector from "@/assets/vector";

const formSchema = z.object({
  email: z.string().min(3).max(50).email(),
  password: z.string().min(3).max(50),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="relative container py-[114px]">
      <div className="absolute">
        <Vector />
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="w-[450px] flex flex-col items-center">
          <h1 className="text-[62px] font-medium mb-6 leading-none">Sign In</h1>
          <p className="text-[#646A69]">Access our services in one click</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full mt-[80px]"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg !font-normal">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="h-[56px] p-4 rounded-[10px] text-lg"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg !font-normal">
                      Password
                    </FormLabel>
                    <FormControl>
                      <InputPassword
                        placeholder="Enter your password"
                        className="h-[56px] p-4 rounded-[10px] text-lg"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-full mt-10 py-4 px-10 font-medium text-lg rounded-md bg-gradient-to-t from-[#181c43] to-[#030B53]"
              >
                Login
              </Button>
            </form>
          </Form>

          <p className="mt-4 text-lg">or</p>

          <Button
            type="submit"
            className="w-full h-full !mt-[4px] !py-4 !px-10 font-medium text-lg rounded-[6px] flex gap-4 items-center"
            variant="outline"
          >
            <Google />
            Continue with Google
          </Button>

          <p className="mt-8 text-lg">
            Did’nt have an account?{" "}
            <Link href="#" className="font-medium underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
