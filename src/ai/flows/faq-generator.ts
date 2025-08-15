'use server';

/**
 * @fileOverview FAQ Generator AI agent.
 *
 * - generateFaq - A function that handles the FAQ generation process.
 * - FaqGeneratorInput - The input type for the generateFaq function.
 * - FaqGeneratorOutput - The return type for the generateFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqGeneratorInputSchema = z.object({
  companyName: z.string().describe('The name of the company.'),
  companyDescription: z.string().describe('A brief description of the company and its services.'),
  targetAudience: z.string().describe('The target audience for the company.'),
  numberOfQuestions: z.number().describe('The number of FAQs to generate.'),
});
export type FaqGeneratorInput = z.infer<typeof FaqGeneratorInputSchema>;

const FaqGeneratorOutputSchema = z.object({
  faqList: z.array(
    z.object({
      question: z.string().describe('The frequently asked question.'),
      answer: z.string().describe('The suggested answer to the question.'),
    })
  ).describe('A list of frequently asked questions and their answers.'),
});
export type FaqGeneratorOutput = z.infer<typeof FaqGeneratorOutputSchema>;

export async function generateFaq(input: FaqGeneratorInput): Promise<FaqGeneratorOutput> {
  return faqGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqGeneratorPrompt',
  input: {schema: FaqGeneratorInputSchema},
  output: {schema: FaqGeneratorOutputSchema},
  prompt: `You are an expert FAQ generator for company websites.

You will be provided with the company name, a description of the company, the target audience, and the number of questions to generate.

Based on this information, you will generate a list of frequently asked questions and their answers.

Company Name: {{{companyName}}}
Company Description: {{{companyDescription}}}
Target Audience: {{{targetAudience}}}
Number of Questions: {{{numberOfQuestions}}}

Output the FAQ list in JSON format.
`,
});

const faqGeneratorFlow = ai.defineFlow(
  {
    name: 'faqGeneratorFlow',
    inputSchema: FaqGeneratorInputSchema,
    outputSchema: FaqGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
