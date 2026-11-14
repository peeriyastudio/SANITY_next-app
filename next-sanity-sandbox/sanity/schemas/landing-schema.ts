import { defineType, defineField, defineArrayMember } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "variant",
      type: "string",
      options: { list: ["centered", "split"], layout: "radio" },
      initialValue: "centered",
    }),
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subheading", type: "text", rows: 2 }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({ name: "buttonLabel", type: "string" }),
    defineField({
      name: "buttonLink",
      type: "url",
      validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
    }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }) => ({ title, subtitle: "Hero" }) },
});

export const testimonialSection = defineType({
  name: "testimonialSection",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({ name: "quote", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
  ],
  preview: { select: { title: "name" }, prepare: ({ title }) => ({ title, subtitle: "Testimonial" }) },
});

export const ctaSection = defineType({
  name: "ctaSection",
  title: "Call to Action",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", type: "text", rows: 2 }),
    defineField({ name: "buttonLabel", type: "string" }),
    defineField({
      name: "buttonLink",
      type: "url",
      validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
    }),
  ],
  preview: { select: { title: "heading" }, prepare: ({ title }) => ({ title, subtitle: "CTA" }) },
});

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({ type: "heroSection" }),
        defineArrayMember({ type: "testimonialSection" }),
        defineArrayMember({ type: "ctaSection" }),
      ],
    }),
  ],
});