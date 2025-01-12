import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

interface Project {
    title: string;
    mainImage: any;
    body: any;
    gitUrl: string;
  }

  async function getProject(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]`;
    const project = await client.fetch(query, { slug });
    return project;
  }

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="text-lg text-left">{children}</p>,
      large: ({ children }) => <p className='text-xl text-left'>{children}</p>,
      h1: ({ children }) => <h1 className="text-4xl font-bold mt-6">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-semibold mt-4">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-medium mt-4">{children}</h3>,
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside text-xl text-left">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside text-lg text-left">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="ml-5 flex items-start leading-normal"> <span className='mr-2'>•</span><span>{children}</span></li>,
      number: ({ children }) => <li className="ml-5">{children}</li>,
    },
    types: {
        image: ({ value }) => (
          <div className="flex justify-center my-6">
            <Image
              src={urlFor(value.asset).url()}
              alt={value.alt || 'Article image'}
              width={700}
              height={400}
              className="rounded-lg"
            />
          </div>
        ),
      },
  };

  export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project: Project = await getProject(params.slug);
  
    if (!project) return <div>Project not found</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto flex flex-col items-center text-center text-black py-32">
          {project.mainImage && (
              <Image
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              width={500}
              height={500}
              className="rounded-lg"
              />
            )}
        <h1 className="text-4xl font-bold mt-6">{project.title}</h1>
        <div className='mt-8 text-left'>
          <PortableText value={project.body} components={components} />
        </div>


            {project.gitUrl && (
            <div className='mt-10 text-left'>
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
                >
                View Project on GitHub
              </a>
            </div>
            )}
          </div>
      );
    }