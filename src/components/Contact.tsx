"use client";

import { useState } from "react";
import { z } from "zod";
import { contactContent } from "../content";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  problemStatement: z.string().min(10, "Please describe your problem in more detail"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    problemStatement: "",
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setFormData({ name: "", email: "", company: "", problemStatement: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {contactContent.headline}
          </h2>
          
          {success ? (
            <div className="rounded-lg border border-primary/50 bg-primary/10 p-8 text-center">
              <h3 className="mb-2 text-xl font-bold text-primary">Thank you!</h3>
              <p className="text-muted">We've received your message and will be in touch shortly.</p>
              <button 
                onClick={() => setSuccess(false)}
                className="mt-6 text-sm font-medium text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {contactContent.fields.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.name ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {contactContent.fields.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.email ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  {contactContent.fields.company}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.company ? 'border-destructive' : 'border-border'}`}
                />
                {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="problemStatement" className="text-sm font-medium text-foreground">
                  {contactContent.fields.problemStatement}
                </label>
                <textarea
                  id="problemStatement"
                  name="problemStatement"
                  rows={4}
                  value={formData.problemStatement}
                  onChange={handleChange}
                  className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.problemStatement ? 'border-destructive' : 'border-border'}`}
                />
                {errors.problemStatement && <p className="text-xs text-destructive">{errors.problemStatement}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : contactContent.cta}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
