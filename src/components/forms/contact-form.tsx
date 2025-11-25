"use client";

import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Textarea } from "@mediaweb1/sdk/shadcn";
import { Send } from "lucide-react";

const ContactSchema = z.object({
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  const onSubmit = (formData: z.infer<typeof ContactSchema>) => {
    setIsPending(true);

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:admin@mediaweb.app?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      form.reset();
      setIsPending(false);
    }, 1000);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-white text-lg font-semibold mb-3 block">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="What's this about?"
                  type="text"
                  className="h-14 w-full px-3 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-primary outline-none !ring-0 transition-all duration-200"
                />
              </FormControl>
              <FormMessage className="text-red-400 mt-2" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-white text-lg font-semibold mb-3 block">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={isPending}
                  placeholder="Tell us what's on your mind..."
                  className="min-h-[200px] w-full px-3 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-primary outline-none !ring-0 transition-all duration-200 resize-none"
                />
              </FormControl>
              <FormMessage className="text-red-400 mt-2" />
            </FormItem>
          )}
        />

        <div className="w-full flex items-center justify-center pt-4">
          <Button
            className="w-full md:w-auto px-12 h-14 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending}
            type="submit"
          >
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
