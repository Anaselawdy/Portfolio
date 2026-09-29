import React from 'react';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '../../../data/projectsData';
import { ProjectDetailView } from '../../../components/ProjectDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((project) => ({
    slug: project.slug || project.id,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
