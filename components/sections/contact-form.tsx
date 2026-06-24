"use client";

import { useActionState } from "react";

import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSection, site } from "@/content/site";

const initialState: ContactFormState | null = null;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state?.success) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center sm:p-8"
      >
        <SuccessIcon className="mx-auto h-10 w-10 text-primary" />
        <p className="mt-4 text-base font-medium text-foreground">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state?.message && !state.success ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {state.message}
        </p>
      ) : null}

      <div className="space-y-2">
        <Label htmlFor="contact-name">{contactSection.form.nameLabel}</Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={contactSection.form.namePlaceholder}
          required
          minLength={2}
          aria-invalid={Boolean(state?.fieldErrors?.name)}
          aria-describedby={
            state?.fieldErrors?.name ? "contact-name-error" : undefined
          }
          disabled={isPending}
          className="h-11 bg-background"
        />
        {state?.fieldErrors?.name ? (
          <p id="contact-name-error" className="text-sm text-destructive">
            {state.fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">{contactSection.form.emailLabel}</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={contactSection.form.emailPlaceholder}
          required
          aria-invalid={Boolean(state?.fieldErrors?.email)}
          aria-describedby={
            state?.fieldErrors?.email ? "contact-email-error" : undefined
          }
          disabled={isPending}
          className="h-11 bg-background"
        />
        {state?.fieldErrors?.email ? (
          <p id="contact-email-error" className="text-sm text-destructive">
            {state.fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">
          {contactSection.form.messageLabel}
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder={contactSection.form.messagePlaceholder}
          required
          minLength={10}
          rows={5}
          aria-invalid={Boolean(state?.fieldErrors?.message)}
          aria-describedby={
            state?.fieldErrors?.message ? "contact-message-error" : undefined
          }
          disabled={isPending}
          className="min-h-32 bg-background"
        />
        {state?.fieldErrors?.message ? (
          <p id="contact-message-error" className="text-sm text-destructive">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full font-semibold shadow-sm sm:w-auto sm:min-w-40"
        disabled={isPending}
      >
        {isPending
          ? contactSection.form.submittingLabel
          : contactSection.form.submitLabel}
      </Button>

      <p className="text-xs text-muted-foreground">
        Ili pišite direktno na{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
