import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ContactForm } from '@/components/contact-form';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Accessibility,
  BusFront,
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Map,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Twitter,
  Users,
} from 'lucide-react';

export default function Home() {
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Goal', href: '#goal' },
    { name: 'Common Questions', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: 'Real-Time Tracking',
      description: 'Track your bus in real-time with our mobile app.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Safety First',
      description:
        'Our certified drivers and rigorous maintenance ensure your safety.',
    },
    {
      icon: <Accessibility className="h-8 w-8 text-primary" />,
      title: 'Accessibility',
      description:
        'All our buses are equipped for accessibility with ramps and designated seating.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: 'Cleanliness',
      description:
        'We are committed to providing a clean and comfortable journey for everyone.',
    },
  ];

  const goals = [
    'Providing affordable and accessible transportation for all residents.',
    'Reducing traffic congestion and our city\'s carbon footprint.',
    'Continuously improving our services through technology and feedback.',
  ];

  const faqs = [
    {
      question: 'How can I find my bus route and schedule?',
      answer:
        'You can find detailed route maps and schedules on our website under the "Routes & Schedules" section. For real-time updates, we highly recommend downloading our mobile app.',
    },
    {
      question: 'What are the fare options and how can I pay?',
      answer:
        'We offer single-ride tickets, daily, weekly, and monthly passes. You can pay with cash on the bus (exact change is appreciated), use our smart-fare card, or purchase passes through our mobile app.',
    },
    {
      question: 'Are the buses wheelchair accessible?',
      answer:
        'Yes, our entire fleet is equipped with ramps and designated seating areas to ensure accessibility for all passengers.',
    },
    {
      question: 'What are the operating hours?',
      answer:
        'Our buses generally operate from 5:00 AM to 11:00 PM daily. However, hours may vary by route and on holidays. Please check the specific schedule for your route.',
    },
    {
      question: 'What if I leave something on the bus?',
      answer:
        'Please contact our Lost and Found department as soon as possible via the contact form or phone number on our website. Be sure to provide the route number, time of travel, and a description of the lost item.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <BusFront className="h-7 w-7 text-primary" />
            <span className="font-headline">ErdemTrans</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
             <a href="/faq-generator" className="text-sm font-medium transition-colors hover:text-primary hidden lg:block">FAQ Generator</a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                  Reliable Public Transit for Ulaanbaatar.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connecting our community with safe, clean, and efficient bus
                  services.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <a href="#how-it-works">View Routes & Schedules</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://placehold.co/1200x600.png"
                  width={1200}
                  height={600}
                  alt="City Bus"
                  data-ai-hint="city bus"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Our Fleet
                  </CardTitle>
                  <BusFront className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">75 Buses Strong</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Daily Ridership
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Serving 20,000+</div>
                  <p className="text-xs text-muted-foreground">
                    passengers daily
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Our Routes
                  </CardTitle>
                  <Map className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    25 Routes Across the City
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Efficient and Reliable Operations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We leverage modern technology and best practices to provide a
                  seamless transit experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 lg:items-center">
              <div className="grid gap-6">
                {features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {feature.icon}
                    <div className="grid gap-1 text-left">
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
               <div className="grid gap-6">
                {features.slice(2, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {feature.icon}
                    <div className="grid gap-1 text-left">
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button asChild size="lg">
                <a href="#">Download Our App</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Connecting Our Community Since 2005
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ErdemTrans has been the backbone of Ulaanbaatar's public
                transport for over a decade. Our mission began with a simple
                goal: to provide a reliable, safe, and affordable way for the
                people of our city to move. We are proud of our roots and our
                dedicated team of experienced drivers and staff who work
                tirelessly to serve our community every day.
              </p>
              <Button asChild>
                <a href="#">Join Our Team</a>
              </Button>
            </div>
            <Image
              src="https://placehold.co/550x310.png"
              width="550"
              height="310"
              alt="About us"
              data-ai-hint="bus drivers team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>

        <section
          id="goal"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Our Commitment to You and Our City
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our goals are centered on service, sustainability, and
                  continuous improvement.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl pt-6">
                <ul className="grid gap-4">
                  {goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-left text-lg">
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We have answers.
                </p>
              </div>
              <div className="w-full max-w-3xl pt-6 text-left">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to help. Contact us for any inquiries or feedback.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg space-y-6">
              <ContactForm />
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+97670123456" className="hover:underline">
                    +976 7012 3456
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:contact@erdemtrans.mn"
                    className="hover:underline"
                  >
                    contact@erdemtrans.mn
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Peace Avenue, Ulaanbaatar, Mongolia
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted/40 py-6 w-full">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <BusFront className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">ErdemTrans</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} ErdemTrans. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
