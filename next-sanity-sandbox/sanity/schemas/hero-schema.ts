/* Schema for the hero document type
    Example:
    {
      name: "title",
      title: "Title",
      type: "string",
    },
*/
const heroSchema = {
  name: "hero",
  title: "Home Hero",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: any) => Rule.required().max(60),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      validation: (Rule: any) => Rule.required().max(140),
    },
  ],
};

export default heroSchema;