import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAND, services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Golden Trust Insure — Free Insurance Quote" },
      {
        name: "description",
        content:
          "Get a free, no-obligation insurance quote in minutes — or speak with an advisor in Boston, MA.",
      },
      { property: "og:title", content: "Contact Golden Trust Insure" },
      {
        property: "og:description",
        content: "Get a free quote or talk to an independent insurance advisor.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  type: z.string().min(1, "Select an insurance type"),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
});
type FormData = z.infer<typeof schema>;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { type: "" } });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Quote request received", {
      description: `Thanks ${data.name}. An advisor will reach out within one business hour.`,
    });
    reset();
  };

  return (
    <>
      <section className="bg-primary text-background pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Get in touch</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            Talk to a real{" "}
            <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
              advisor
            </em>
            .
          </h1>
          <p className="mt-6 text-background/75 max-w-2xl text-lg">
            No phone trees, no chatbots. Send a message or call us directly — every inquiry is
            answered by a licensed advisor within one business hour.
          </p>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <div>
            <h2 className="font-heading text-3xl">Office details</h2>
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-base">Visit us</p>
                  <p className="mt-1 text-muted-foreground">{BRAND.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-base">Call us</p>
                  <p className="mt-1 text-muted-foreground">{BRAND.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-base">Email us</p>
                  <p className="mt-1 text-muted-foreground">{BRAND.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent shrink-0">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-base">Hours</p>
                  <p className="mt-1 text-muted-foreground">{BRAND.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl overflow-hidden aspect-[5/3] bg-[var(--surface-2)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary-mid/20" />
              <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                <div>
                  <MapPin className="h-8 w-8 text-accent mx-auto" />
                  <p className="mt-3 font-heading text-lg">Boston Harbor Office</p>
                  <p className="text-xs text-muted-foreground">
                    Map preview · Click to open in Maps
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl bg-card border border-border p-8 lg:p-10"
          >
            <h2 className="font-heading text-3xl">Request a quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields required.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" error={errors.name?.message}>
                <Input {...register("name")} placeholder="Jane Doe" className="h-11 rounded-lg" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="jane@example.com"
                  className="h-11 rounded-lg"
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <Input
                  {...register("phone")}
                  placeholder="(555) 123-4567"
                  className="h-11 rounded-lg"
                />
              </Field>
              <Field label="Insurance type" error={errors.type?.message}>
                <Select
                  value={watch("type")}
                  onValueChange={(v) => setValue("type", v, { shouldValidate: true })}
                >
                  <SelectTrigger className="h-11 rounded-lg w-full">
                    <SelectValue placeholder="Select coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.slug} value={s.title}>
                        {s.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="Bundle">Bundle (multi-line)</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message" error={errors.message?.message}>
                <Textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us about your situation and what you're looking to cover…"
                  className="rounded-lg"
                />
              </Field>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-7 h-12 w-full sm:w-auto"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                "Send message →"
              )}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </label>
  );
}
