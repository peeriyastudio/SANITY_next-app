/* Schema for the project document type
    Example:
    {
      name: "title",
      title: "Title",
      type: "string",
    },
*/
const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {source: "title", maxLength: 96},
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {hotspot: true},
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        }
      ]
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{type: "block"}],
    },
    {
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      validation: (Rule: any) => Rule.unique().max(8),
    },
  ]
};

export default project;