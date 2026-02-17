import {
  DollarSignIcon,
  FolderEditIcon,
  GalleryHorizontalEnd,
  MenuIcon,
  SparkleIcon,
  XIcon
} from 'lucide-react';
import { GhostButton, PrimaryButton } from './Buttons';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { useAxios } from '../configs/axios';
import toast from 'react-hot-toast';

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn, openSignUp } = useClerk();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [credits, setCredits] = useState<number>(0);

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Create', href: '/generate' },
    { name: 'Community', href: '/community' },
    { name: 'Plans', href: '/plans' },
  ];

  const api = useAxios();

  useEffect(() => {
    if (!user) return;
    let cancelled = false;

    const loadCredits = async () => {
      try {
        const { data } = await api.get('/api/user/credits');
        if (!cancelled) setCredits(data.credits);
      } catch (error: unknown) {
        if (!cancelled) {
          toast.error('Failed to fetch credits');
          console.error(error);
        }
      }
    };

    loadCredits();
    return () => { cancelled = true; };
  }, [user, api]);

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 250, damping: 70, mass: 1 }}
    >
      {/* Navbar container with glass effect */}
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3 bg-black/40 backdrop-blur-lg border border-white/5 rounded-3xl shadow-lg">
        
        {/* Logo */}
        <Link to="/" onClick={() => scrollTo(0, 0)} className="relative">
          <img src={assets.logo} alt="logo" className="h-9 transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => scrollTo(0, 0)}
              className="relative group px-2 py-1 hover:text-white transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-300 rounded" />
            </Link>
          ))}
        </div>

        {/* User actions */}
        {!user ? (
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openSignIn()}
              className="text-sm font-medium text-gray-300 hover:text-white transition"
            >
              Sign in
            </button>
            <PrimaryButton onClick={() => openSignUp()}>Get Started</PrimaryButton>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <GhostButton onClick={() => navigate('/plans')} className="text-gray-300 border-none sm:py-1.5 hover:text-white">
              Credits: {credits}
            </GhostButton>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Generate"
                  labelIcon={<SparkleIcon size={14} />}
                  onClick={() => navigate('/generate')}
                />
                <UserButton.Action
                  label="My Generations"
                  labelIcon={<FolderEditIcon size={14} />}
                  onClick={() => navigate('/my-generations')}
                />
                <UserButton.Action
                  label="Community"
                  labelIcon={<GalleryHorizontalEnd size={14} />}
                  onClick={() => navigate('/community')}
                />
                <UserButton.Action
                  label="Plans"
                  labelIcon={<DollarSignIcon size={14} />}
                  onClick={() => navigate('/plans')}
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        )}

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-full hover:bg-white/10 transition">
          {isOpen ? <XIcon className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <motion.div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 text-lg font-medium transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-indigo-400 transition"
          >
            {link.name}
          </Link>
        ))}

        {!user && (
          <>
            <button
              onClick={() => { setIsOpen(false); openSignIn(); }}
              className="text-white hover:text-indigo-400 transition font-medium"
            >
              Sign in
            </button>
            <PrimaryButton
              onClick={() => { setIsOpen(false); openSignUp(); }}
            >
              Get Started
            </PrimaryButton>
          </>
        )}

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
        >
          <XIcon className="w-6 h-6 text-white" />
        </button>
      </motion.div>
    </motion.nav>
  );
}
