"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const getTestimonials = (t: (key: string) => string) => [
  {
    name: "Michael Chen",
    role: t('testimonials.michael.role'),
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: t('testimonials.michael.content')
  },
  {
    name: "Sarah Johnson",
    role: t('testimonials.sarah.role'),
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: t('testimonials.sarah.content')
  },
  {
    name: "David Wilson",
    role: t('testimonials.david.role'),
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: t('testimonials.david.content')
  },
  {
    name: "Emily Zhang",
    role: t('testimonials.emily.role'),
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: t('testimonials.emily.content')
  },
  {
    name: "James Rodriguez",
    role: t('testimonials.james.role'),
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: t('testimonials.james.content')
  },
  {
    name: "Lisa Thompson",
    role: t('testimonials.lisa.role'),
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: t('testimonials.lisa.content')
  }
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = getTestimonials(t);
  
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;