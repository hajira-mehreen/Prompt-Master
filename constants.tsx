import { 
  Plane, GraduationCap, Briefcase, Utensils, HeartPulse, 
  Map, PenTool, Lightbulb, Search, Mic, Video, Edit3, 
  TrendingUp, Code, MessageSquare, BarChart2 
} from 'lucide-react';
import { PromptCategory, LLMModel } from './types';

export const NAV_ITEMS = [
  { label: 'Why Prompts Matter', href: '#importance' },
  { label: 'Structure', href: '#structure' },
  { label: 'Top Models', href: '#models' },
  { label: 'Practice Library', href: '#practice' },
];

export const LLM_DATA: LLMModel[] = [
  {
    name: 'GPT-4o',
    company: 'OpenAI',
    features: 'Multimodal, strong reasoning, great for coding and creative writing.',
    link: 'https://chat.openai.com',
    iconType: 'openai'
  },
  {
    name: 'Gemini 2.5 Pro',
    company: 'Google',
    features: 'Strong search integration, good for research, multimodal.',
    link: 'https://gemini.google.com',
    iconType: 'google'
  },
  {
    name: 'Claude 3.5 Sonnet',
    company: 'Anthropic',
    features: 'Safe, long context, strong reasoning, human-like nuance.',
    link: 'https://claude.ai',
    iconType: 'anthropic'
  },
  {
    name: 'Grok-3',
    company: 'xAI',
    features: 'Real-time information, integrated with X platform.',
    link: 'https://x.ai',
    iconType: 'xai'
  },
  {
    name: 'LLaMA-based chat',
    company: 'Meta/Open',
    features: 'Open-source, customizable, often used via third-party front-ends.',
    link: 'https://llama.meta.com',
    iconType: 'meta'
  }
];

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: 'travel-counseling',
    title: 'Travel Counselling',
    icon: Plane,
    prompts: [
      { id: 'tc1', text: "Plan a 7-day budget trip to Himachal Pradesh for 3 college friends in winter. Include daily itinerary, accommodation under ₹800/night, local food suggestions, and safety tips for snow." },
      { id: 'tc2', text: "Act as a local travel guide from Kerala. Recommend 5 hidden gems in Wayanad that tourists usually miss, with the best time to visit and why each place is special." },
      { id: 'tc3', text: "List 4 money-saving travel hacks for students traveling by train across India during vacation." }
    ]
  },
  {
    id: 'study-related',
    title: 'Study Related',
    icon: GraduationCap,
    prompts: [
      { id: 'sr1', text: "Explain the Pomodoro Technique for exam preparation and give a sample daily study plan for someone preparing for JEE while managing school." },
      { id: 'sr2', text: "You are a top-rank student. Share 5 practical study habits that helped you consistently score above 90%, in a friendly tone." },
      { id: 'sr3', text: "Summarize the most effective note-taking methods for university lectures in 4 bullet points." }
    ]
  },
  {
    id: 'career-motivation',
    title: 'Career & Motivation',
    icon: Briefcase,
    prompts: [
      { id: 'cm1', text: "Write a motivational message for students who did not get placed in the first campus recruitment round, giving them hope and practical steps." },
      { id: 'cm2', text: "Act as a career counselor. Compare the long-term prospects of working at a big tech company vs a startup for a fresh graduate." },
      { id: 'cm3', text: "List 3 future-proof career paths for the next 10 years and the skills needed for each." }
    ]
  },
  {
    id: 'food-diet',
    title: 'Food & Diet Planning',
    icon: Utensils,
    prompts: [
      { id: 'fd1', text: "Create a weekly vegetarian meal plan for a busy student, focusing on high-protein Indian dishes that can be prepared quickly." },
      { id: 'fd2', text: "You are a nutritionist. Suggest a day's diet for someone who wants to lose weight but has only access to a basic hostel mess." },
      { id: 'fd3', text: "Give 3 healthy, easy-to-cook Indian breakfast ideas, with estimated prep time and calorie range." }
    ]
  },
  {
    id: 'health-fitness',
    title: 'Health & Fitness',
    icon: HeartPulse,
    prompts: [
      { id: 'hf1', text: "Design a 20-minute daily workout routine that can be done in a small room without equipment, suitable for beginners." },
      { id: 'hf2', text: "List 5 daily habits that help reduce stress for students and briefly explain each." },
      { id: 'hf3', text: "Explain how sleep affects learning and exam performance, in simple terms." }
    ]
  },
  {
    id: 'travel-planning',
    title: 'Travel Planning',
    icon: Map,
    prompts: [
      { id: 'tp1', text: "Plan a 3-day weekend getaway from Bengaluru within 200 km, including travel options, costs, and must-see places." },
      { id: 'tp2', text: "Create a packing checklist for a 10-day backpacking trip across multiple Indian cities in summer." },
      { id: 'tp3', text: "You are a travel planner. Suggest the best time of year and ideal duration for a first-time trip to Ladakh." }
    ]
  },
  {
    id: 'creative-storytelling',
    title: 'Creative Storytelling',
    icon: PenTool,
    prompts: [
      { id: 'cs1', text: "Write a humorous short story where Bangalore traffic jams become time portals, and a tech employee discovers they can travel to different eras of Indian history." },
      { id: 'cs2', text: "Channel Ruskin Bond's writing style to describe a modern college fest in a hill station, capturing both nostalgia and contemporary energy." },
      { id: 'cs3', text: "Create a 150-word story about an AI assistant that helps a shy student find confidence, with a heartwarming twist about human connection." }
    ]
  },
  {
    id: 'business-ideas',
    title: 'Business Ideas',
    icon: Lightbulb,
    prompts: [
      { id: 'bi1', text: "Generate 6 innovative business ideas for college students that solve real problems on campus and require less than ₹10,000 starting budget." },
      { id: 'bi2', text: "Act as Ritesh Agarwal (OYO founder). Share the top 3 lessons you learned while building a startup in college and your advice to current student entrepreneurs." },
      { id: 'bi3', text: "Identify 4 pain points in college hostels and suggest one practical business solution for each that students could implement." }
    ]
  },
  {
    id: 'job-search',
    title: 'Job Search',
    icon: Search,
    prompts: [
      { id: 'js1', text: "Help me craft a compelling ATS-friendly resume summary for a fresher applying to software developer roles at Indian IT companies." },
      { id: 'js2', text: "Create a 45-day job search action plan for a final-year student, including networking tasks, application targets, and learning goals." },
      { id: 'js3', text: "List 8 emerging job roles in the tech industry for 2025–2026, with one-line descriptions of each and key skills required." }
    ]
  },
  {
    id: 'interview-prep',
    title: 'Interview Prep',
    icon: Mic,
    prompts: [
      { id: 'ip1', text: "Conduct a mock technical interview for a Java developer role at TCS. Ask 4 progressively harder questions and then suggest strong sample answers." },
      { id: 'ip2', text: "You are an HR manager at Infosys. Help me prepare excellent answers for 'Tell me about yourself', 'Why should we hire you?', and 'Where do you see yourself in 5 years?' for a fresher." },
      { id: 'ip3', text: "Create 6 STAR method examples for common behavioral questions in tech interviews, using scenarios from college projects and internships." }
    ]
  },
  {
    id: 'creative-media',
    title: 'Creativity (Image/Video)',
    icon: Video,
    prompts: [
      { id: 'cm1', text: "Suggest 5 creative video content ideas for a college YouTube channel that showcases campus life, each with a short shot list and editing tips." },
      { id: 'cm2', text: "List 4 graphic design project ideas using free tools that a computer science student can include in their portfolio." },
      { id: 'cm3', text: "Create content ideas for Instagram Reels showing 'A day in the life of an engineering student', including caption and audio suggestions." }
    ]
  },
  {
    id: 'creative-writing',
    title: 'Creative Writing',
    icon: Edit3,
    prompts: [
      { id: 'cw1', text: "Write an engaging blog post about 'Surviving Engineering College' in a humorous, relatable tone that students will want to share." },
      { id: 'cw2', text: "Compose a modern poem about online classes during COVID-19, capturing both challenges and unexpected positives." },
      { id: 'cw3', text: "Write a 5-minute comedy sketch script about miscommunication between North and South Indian roommates in a hostel, focusing on cultural misunderstandings and friendship." }
    ]
  },
  {
    id: 'business-strategy',
    title: 'Business & Strategy',
    icon: TrendingUp,
    prompts: [
      { id: 'bs1', text: "Analyze the potential for a student-focused food delivery app in a tier-2 city. Discuss market size, competitors, and go-to-market strategy." },
      { id: 'bs2', text: "Act as a business consultant. A college canteen is losing money post-pandemic. Suggest 5 innovative strategies to increase profit and student engagement." },
      { id: 'bs3', text: "Create a simple business plan template for student entrepreneurs, with key sections and guiding questions." }
    ]
  },
  {
    id: 'stem-learning',
    title: 'STEM / Tech Learning',
    icon: Code,
    prompts: [
      { id: 'sl1', text: "Explain quantum computing to computer science students using analogies from daily life, making it fun and easy to remember." },
      { id: 'sl2', text: "Suggest 5 final-year project ideas in AI or machine learning that address real-world problems and can be completed with limited resources." },
      { id: 'sl3', text: "Create a structured study guide for Data Structures and Algorithms focused on placement preparation." }
    ]
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking',
    icon: MessageSquare,
    prompts: [
      { id: 'ct1', text: "Debate the statement: 'AI will replace 50% of IT jobs by 2030.' Give 3 strong arguments for and 3 against, with brief justification." },
      { id: 'ct2', text: "Analyze the pros and cons of the National Education Policy (NEP 2020) from the perspective of a computer science student." },
      { id: 'ct3', text: "Examine the ethical implications of facial recognition in schools and colleges, considering privacy, safety, and cultural issues." }
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    icon: BarChart2,
    prompts: [
      { id: 'da1', text: "Analyze this placement data: CS – 85% placed, avg package ₹6.5L; ECE – 70%, ₹5.8L; Mechanical – 60%, ₹4.2L. Identify trends and suggest ways to improve outcomes for lower-placement branches." },
      { id: 'da2', text: "Interpret a survey where 65% of students prefer remote internships. Explain possible reasons and implications for companies." },
      { id: 'da3', text: "Create a data storytelling outline about 'Rise of Ed-Tech during COVID-19', listing key insights and suggested charts." }
    ]
  }
];
