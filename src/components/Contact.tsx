"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactContent } from "../content";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  problemStatement: z
    .string()
    .min(10, "Please describe your problem in more detail"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      problemStatement: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
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
              <h3 className="mb-2 text-xl font-bold text-primary">
                Thank you!
              </h3>
              <p className="text-muted">
                We&apos;ve received your message and will be in touch shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-sm font-medium text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-xl border border-border bg-card p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    {contactContent.fields.name}
                    <span className="text-destructive ml-1" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.name ? "border-destructive" : "border-border"}`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    {contactContent.fields.email}
                    <span className="text-destructive ml-1" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.email ? "border-destructive" : "border-border"}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-foreground"
                >
                  {contactContent.fields.company}
                  <span className="text-destructive ml-1" aria-hidden="true">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  {...register("company")}
                  aria-invalid={errors.company ? "true" : "false"}
                  aria-describedby={
                    errors.company ? "company-error" : undefined
                  }
                  className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.company ? "border-destructive" : "border-border"}`}
                />
                {errors.company && (
                  <p id="company-error" className="text-xs text-destructive">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="problemStatement"
                  className="text-sm font-medium text-foreground"
                >
                  {contactContent.fields.problemStatement}
                  <span className="text-destructive ml-1" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="problemStatement"
                  rows={4}
                  {...register("problemStatement")}
                  aria-invalid={errors.problemStatement ? "true" : "false"}
                  aria-describedby={
                    errors.problemStatement
                      ? "problemStatement-error"
                      : undefined
                  }
                  className={`w-full rounded-md border bg-input px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${errors.problemStatement ? "border-destructive" : "border-border"}`}
                />
                {errors.problemStatement && (
                  <p
                    id="problemStatement-error"
                    className="text-xs text-destructive"
                  >
                    {errors.problemStatement.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
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
