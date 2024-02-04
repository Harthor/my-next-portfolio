'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Gastón Needleman ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hello! I'm from Argentina with 2+ years in web development, focusing on Python, Django, and JavaScript. I contributed to 1Hive and Token Engineering Commons, enhancing my skills through open-source projects. I continuously explore new technologies and welcome opportunities for impactful collaboration. Driven by a love for technology, my journey is defined by continuous learning and meaningful engagement with the tech world.`,
    keywords: "Gastón Needleman, Gaston Needleman portfolio, Gaston Needleman GitHub, Gastón Needleman LinkedIn, Web development, Web programmer, Web design, Website creation, Web applications, Mobile applications, Desktop applications, Frontend development, Backend development, Full-stack developer, HTML, CSS, JavaScript, Python, Django, Open source contributions, 1Hive, Token Engineering Commons, Agile methodologies, Continuous learning, Tech community engagement.",
    type: "website"
  
    
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://jeandv.vercel.app${pathname}`} />
      <link rel='canonical' href={`https://jeandv.vercel.app${pathname}`} />
      <link rel='me' href='mailto:gastoncmr@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Jean Rondón' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@jeandv_' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;