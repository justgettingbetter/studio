'use server';

import { generateFaq, type FaqGeneratorInput, type FaqGeneratorOutput } from '@/ai/flows/faq-generator';

export async function handleGenerateFaq(input: FaqGeneratorInput): Promise<FaqGeneratorOutput | { error: string }> {
    try {
        const output = await generateFaq(input);
        if (!output || !output.faqList) {
            return { error: 'Failed to generate FAQs. The AI returned an empty response.' };
        }
        return output;
    } catch (e: any) {
        console.error('FAQ Generation Error:', e);
        return { error: e.message || 'An unknown error occurred while generating FAQs.' };
    }
}
