'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    const firstError = validatedFields.error.errors[0];
    return {
      success: false,
      message: firstError?.message || 'Validation failed.',
    };
  }

  // In a real app, you would send an email here.
  console.log('New contact form submission:');
  console.log(validatedFields.data);

  return {
    success: true,
    message: 'Message sent successfully!',
  };
}
