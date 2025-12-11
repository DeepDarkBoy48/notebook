// Import all markdown files as raw strings eagerly
const modules = import.meta.glob('../notes/**/*.md', { query: '?raw', import: 'default', eager: true });

export interface Note {
  slug: string;
  category: string;
  subcategory?: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  content: string;
}

function parseFrontmatter(text: string) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!match) {
    // Try to extract title from first h1 if no frontmatter
    const titleMatch = text.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : '';
    const imageMatch = text.match(/!\[.*?\]\((.*?)\)/);
    const description = text.replace(/^#\s+.+$/m, '').trim().split('\n')[0] || '';
    
    return { 
      data: { title }, 
      content: text,
      extractedDescription: description,
      extractedImage: imageMatch ? imageMatch[1] : undefined
    };
  }

  const frontmatterBlock = match[1];
  const content = match[2];
  const data: Record<string, string> = {};

  frontmatterBlock.split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value) {
      data[key.trim()] = value.join(':').trim();
    }
  });

  // Fallbacks if not in frontmatter
  let extractedDescription = '';
  let extractedImage = undefined;

  if (!data.description) {
    // Remove headers and empty lines to find first paragraph
    extractedDescription = content
      .replace(/^#+\s.*$/gm, '') // Remove headers
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)[0] || '';
  }

  if (!data.image) {
    const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
    if (imageMatch) {
      extractedImage = imageMatch[1];
    }
  }

  return { data, content, extractedDescription, extractedImage };
}

export const getAllNotes = (): Note[] => {
  return Object.entries(modules).map(([path, rawContent]) => {
    const { data, content, extractedDescription, extractedImage } = parseFrontmatter(rawContent as string);
    const parts = path.split('/');
    // path is relative to src/lib, so it looks like: ../notes/Category/Subcategory/File.md
    // OR ../notes/Category/File.md
    // We need to handle both cases.
    
    // parts structure from split on "../notes/...":
    // [.., notes, Category, File.md] -> length 4
    // [.., notes, Category, SubCategory, File.md] -> length 5
    
    const filename = parts[parts.length - 1];
    const category = parts[parts.length - (parts.length > 4 ? 3 : 2)];
    const subcategory = parts.length > 4 ? parts[parts.length - 2] : undefined;
    const slug = filename.replace('.md', '');

    return {
      slug,
      category,
      subcategory,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || extractedDescription,
      image: data.image || extractedImage,
      content
    };
  }).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getNotesByCategory = (category: string) => {
  return getAllNotes().filter(note => note.category.toLowerCase() === category.toLowerCase());
};

export const getNote = (category: string, slug: string) => {
  return getAllNotes().find(
    note => note.category.toLowerCase() === category.toLowerCase() && note.slug === slug
  );
};
