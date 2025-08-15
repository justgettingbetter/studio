'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { handleGenerateFaq } from './actions';
import type { FaqGeneratorOutput } from '@/ai/flows/faq-generator';
import { Skeleton } from '@/components/ui/skeleton';
import { BusFront } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const formSchema = z.object({
  companyName: z.string().min(1, 'Company name is required.'),
  companyDescription: z.string().min(10, 'Description must be at least 10 characters.'),
  targetAudience: z.string().min(1, 'Target audience is required.'),
  numberOfQuestions: z.coerce.number().min(1).max(10),
});

type FormValues = z.infer<typeof formSchema>;

export default function FaqGeneratorPage() {
  const [isPending, startTransition] = useTransition();
  const [generatedFaqs, setGeneratedFaqs] = useState<FaqGeneratorOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: 'ErdemTrans',
      companyDescription: 'A reliable, modern, and efficient city bus transportation service in Ulaanbaatar. We are committed to connecting our community with safe, clean, and efficient bus services.',
      targetAudience: 'City residents, commuters, tourists, and individuals seeking accessible transportation options.',
      numberOfQuestions: 5,
    },
  });

  const onSubmit = (data: FormValues) => {
    setGeneratedFaqs(null);
    startTransition(async () => {
      const result = await handleGenerateFaq(data);
      if ('error' in result) {
        toast({
          title: 'Error Generating FAQs',
          description: result.error,
          variant: 'destructive',
        });
      } else {
        setGeneratedFaqs(result);
        toast({
          title: 'FAQs Generated Successfully',
          description: 'Review the generated questions and answers below.',
        });
      }
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container flex h-14 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold">
            <BusFront className="h-6 w-6 text-primary" />
            ErdemTrans Hub
          </a>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto max-w-4xl py-12 px-4">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight font-headline">FAQ Generator</h1>
          <p className="text-lg text-muted-foreground">
            Generate frequently asked questions for your business using AI.
          </p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>
              Provide details about your company to generate relevant FAQs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ErdemTrans" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your company and its services."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Audience</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., City residents, commuters, tourists"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfQuestions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Questions (1-10)</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="px-0 pt-6">
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? 'Generating...' : 'Generate FAQs'}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>

        {(isPending || generatedFaqs) && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6 font-headline">Generated FAQs</h2>
            {isPending && (
              <div className="space-y-4">
                {[...Array(form.getValues('numberOfQuestions'))].map((_, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-6 w-full" />
                     <Skeleton className="h-6 w-5/6" />
                  </div>
                ))}
              </div>
            )}
            {generatedFaqs && (
              <Accordion type="single" collapsible className="w-full space-y-2">
                {generatedFaqs.faqList.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="bg-muted/50 rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        )}
      </main>
    </>
  );
}
