"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactContent } from "../content";

const contactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email address"),
  company: z.string().optional(),
  projectType: z.enum(
    ["Landing page", "Custom software / platform", "Mobile app", "Cloud / infrastructure", "Something else"],
    {
      message: "Please select a project type",
    }
  ),
  problemStatement: z
    .string()
    .min(10, "Please describe what you are trying to build (minimum 10 characters)"),
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
      projectType: undefined,
      problemStatement: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Submitting project brief:", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-ink text-white">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px]">
          {/* Info Side */}
          <div className="reveal">
            <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,36px)] text-white mb-4">
              {contactContent.headline}
            </h2>
            <p className="text-[#AEB5C0] text-[15.5px] mb-7 leading-relaxed max-w-[420px]">
              {contactContent.lead}
            </p>
            <div className="flex gap-3 text-sm text-[#C4CAD3] font-mono mb-3.5">
              <span className="text-white font-medium">Email:</span>
              <span>{contactContent.email}</span>
            </div>
            <div className="flex gap-3 text-sm text-[#C4CAD3] font-mono mb-3.5">
              <span className="text-white font-medium">Response time:</span>
              <span>{contactContent.responseTime}</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="reveal">
            {success ? (
              <div className="rounded-lg border border-[#7FC7AB]/50 bg-[#7FC7AB]/10 p-8 text-center">
                <h3 className="mb-2 text-xl font-bold text-[#7FC7AB]">
                  Brief Received!
                </h3>
                <p className="text-[#AEB5C0]">
                  Thank you. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-sm font-medium text-[#7FC7AB] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Full name"
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      className={`bg-white/5 border text-white px-3.5 py-3 rounded-custom font-sans text-sm w-full placeholder-[#7A8290] focus:outline-none focus:border-rust transition-colors duration-150 ${errors.name ? "border-[#C1432A]" : "border-white/18"}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#C1432A] px-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Work email"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`bg-white/5 border text-white px-3.5 py-3 rounded-custom font-sans text-sm w-full placeholder-[#7A8290] focus:outline-none focus:border-rust transition-colors duration-150 ${errors.email ? "border-[#C1432A]" : "border-white/18"}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#C1432A] px-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Company */}
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Company"
                      {...register("company")}
                      className="bg-white/5 border border-white/18 text-white px-3.5 py-3 rounded-custom font-sans text-sm w-full placeholder-[#7A8290] focus:outline-none focus:border-rust transition-colors duration-150"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1">
                    <select
                      {...register("projectType")}
                      aria-invalid={errors.projectType ? "true" : "false"}
                      className={`bg-white/5 border text-white px-3.5 py-3 rounded-custom font-sans text-sm w-full focus:outline-none focus:border-rust transition-colors duration-150 ${errors.projectType ? "border-[#C1432A]" : "border-white/18"} select-placeholder-color`}
                      defaultValue=""
                    >
                      <option value="" disabled className="text-ink-soft bg-ink">
                        Project type
                      </option>
                      <option value="Landing page" className="bg-ink text-white">Landing page</option>
                      <option value="Custom software / platform" className="bg-ink text-white">Custom software / platform</option>
                      <option value="Mobile app" className="bg-ink text-white">Mobile app</option>
                      <option value="Cloud / infrastructure" className="bg-ink text-white">Cloud / infrastructure</option>
                      <option value="Something else" className="bg-ink text-white">Something else</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-xs text-[#C1432A] px-1">
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="space-y-1">
                  <textarea
                    placeholder="What are you trying to build?"
                    rows={4}
                    {...register("problemStatement")}
                    aria-invalid={errors.problemStatement ? "true" : "false"}
                    className={`bg-white/5 border text-white px-3.5 py-3 rounded-custom font-sans text-sm w-full placeholder-[#7A8290] focus:outline-none focus:border-rust transition-colors duration-150 resize-y min-h-[100px] ${errors.problemStatement ? "border-[#C1432A]" : "border-white/18"}`}
                  />
                  {errors.problemStatement && (
                    <p className="text-xs text-[#C1432A] px-1">
                      {errors.problemStatement.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="bg-rust text-white border border-rust px-6 py-3.25 rounded-custom font-mono text-sm font-medium cursor-pointer mt-1.5 self-start hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending brief..." : "Send project brief →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
