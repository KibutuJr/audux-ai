import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: 'Effortless Upload',
    desc: 'Drop in your product images and model shots. Our AI handles optimization automatically—no setup, no friction.'
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: 'Create in Seconds',
    desc: 'Generate high-quality lifestyle visuals instantly with AI precision—fast, realistic, and brand-ready.'
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: 'Scroll-Stopping Video',
    desc: 'Transform static images into short-form, social-ready videos optimized for ads, Reels, and conversions.'
  }
];

export const plansData = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$10',
    desc: 'Perfect for trying things out and seeing real results.',
    credits: 25,
    features: [
      '25 Generation Credits',
      'Standard-Quality Outputs',
      'No Watermarks',
      'Basic Generation Speed',
      'Email Support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$25',
    desc: 'Built for creators and growing teams who need more speed and power.',
    credits: 80,
    features: [
      '80 Generation Credits',
      'HD Quality Visuals',
      'No Watermarks',
      'Short-Form Video Generation',
      'Priority Support'
    ],
    popular: true
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: '$99',
    desc: 'Designed for agencies and brands scaling content at volume.',
    credits: 300,
    features: [
      '300 Generation Credits',
      'HD Quality Outputs',
      'No Watermarks',
      'Fastest Generation Speed',
      'Chat & Email Support'
    ]
  }
];

export const faqData = [
  {
    question: 'What exactly can your platform do?',
    answer: 'Our AI instantly turns your product images and model shots into professional lifestyle visuals and short-form videos optimized for social media, ads, and e-commerce—all in seconds.'
  },
  {
    question: 'Who is this platform for?',
    answer: 'Content creators, marketing teams, DTC brands, startups, and agencies—anyone looking to scale high-quality visuals quickly without relying on expensive photoshoots.'
  },
  {
    question: 'How fast can I generate content?',
    answer: 'In seconds. Upload your assets, and our AI delivers polished images and social-ready videos almost instantly, letting you focus on growth and engagement.'
  },
  {
    question: 'Do I need design or video editing skills?',
    answer: 'Not at all. Our platform is fully automated and user-friendly—anyone can create professional visuals with a few clicks.'
  },
  {
    question: 'Can I use the content commercially?',
    answer: 'Yes! All outputs come with full commercial rights so you can use your AI-generated images and videos for ads, social media, or e-commerce without restrictions.'
  },
  {
    question: 'Are there limits on how much content I can generate?',
    answer: 'Limits depend on your plan, with credits assigned per image or video generation. You can upgrade at any time to unlock more capacity and faster speeds.'
  },
  {
    question: 'What formats are supported?',
    answer: 'We support product images, model photos, and deliver outputs in social-optimized formats ready for Instagram, TikTok, Facebook, Reels, and web commerce.'
  },
  {
    question: 'Is the platform suitable for teams?',
    answer: 'Absolutely. Our Pro and Ultra plans are designed for teams and agencies, letting multiple users generate, collaborate, and manage assets efficiently.'
  },
  {
    question: 'Do you offer support if I get stuck?',
    answer: 'Yes! We provide responsive email and chat support, plus tutorials and guides to help you get the most out of the platform.'
  },
  {
    question: 'Can I try it before committing to a plan?',
    answer: 'Yes. Our Starter plan lets you test the platform with free credits so you can see instant results before upgrading.'
  },
  {
    question: 'How secure is my data?',
    answer: 'All uploads are encrypted and stored securely. Your images and videos are private and used only to generate your requested content.'
  },
  {
    question: 'Can I scale my content production?',
    answer: 'Definitely. Our platform is built to scale with your brand, letting you generate hundreds of images and videos efficiently while maintaining quality.'
  }
];


export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "#home" },
      { name: "Features", url: "#features" },
      { name: "Pricing", url: "#pricing" },
      { name: "FAQs", url: "#faq" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of Service", url: "/terms-of-service" }
    ]
  }
   
];