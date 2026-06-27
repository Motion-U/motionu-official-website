// ── Shared type definitions for the Motion-U website ──

import type { ReactNode } from "react";

// ── Component Props ──
export interface ActivityCardProps {
  activityImage: ReactNode;
  activityTitle: string;
  activityDesc: string;
}

export interface MembershipPerkCardProps {
  title: string;
  description: string;
}

export interface CollaboratorLogoProps {
  image: string;
  width: number;
  height: number;
}

export interface ProjectPostCardProps {
  title: string;
  date?: string;
  image: string;
  link: string;
  credit: string;
  description: string;
}

export interface BlogPostCardProps {
  keyId: string;
  title: string;
  date: string;
  desc: string;
  image: string;
}

export interface HeadingProps {
  text: string;
  lightFont?: boolean;
}

export interface PrettyButtonProps {
  text: string;
  link?: string;
}

export interface TextProps {
  children: ReactNode;
}

// ── Contentful CMS types ──
export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface ContentfulProjectEntry {
  sys: { id: string };
  fields: {
    title: string;
    date?: string;
    image: ContentfulImage;
    link: string;
    description: string;
    credit?: string;
  };
}

export interface ContentfulNewsEntry {
  sys: { id: string };
  fields: {
    title: string;
    date: string;
    description: string;
    image: ContentfulImage;
    content?: unknown;
  };
}

// ── Data-layer types (for static data files) ──
export interface Activity {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface MembershipPerk {
  title: string;
  description: string;
}

export interface Collaborator {
  name: string;
  image: string;
  width: number;
  height: number;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  image: string;
  link: string;
  credit: string;
  date?: string;
}

export interface SiteConfig {
  clubName: string;
  tagline: string;
  description: string;
  email: string;
  address: string;
  socials: {
    instagram: string;
    tiktok: string;
    twitter: string;
    linkedin: string;
  };
}
