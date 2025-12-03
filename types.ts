import { LucideIcon } from 'lucide-react';

export interface PromptExample {
  id: string;
  text: string;
}

export interface PromptCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  prompts: PromptExample[];
}

export interface LLMModel {
  name: string;
  company: string;
  features: string;
  link: string;
  iconType: 'openai' | 'google' | 'anthropic' | 'xai' | 'meta';
}

export interface NavItem {
  label: string;
  href: string;
}