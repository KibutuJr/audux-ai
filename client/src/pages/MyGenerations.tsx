import { useEffect, useState } from "react";
import type { Project } from "../types";
import { Loader2Icon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { PrimaryButton } from "../components/Buttons";
import { useNavigate } from "react-router-dom";
import api from "../configs/axios";
import toast from "react-hot-toast";
import { useUser, useAuth } from "@clerk/clerk-react"; 

const MyGenerations = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const [generations, setGenerations] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMyGenerations = async () => {
    try {
      const token = await getToken();
      const { data } = await api.get("/api/user/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGenerations(data.projects); 
      setLoading(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && user) {
      fetchMyGenerations()
    } else if(isLoaded && !user) {
      navigate('/')
    }
  }, [isLoaded, user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2Icon className="w-7 h-7 animate-spin text-indigo-400" /> {/* Fixed className */}
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">My Generations</h1> {/* Fixed typo: md:text 4xl */}
          <p className="text-gray-400">View and manage your AI-generated content here</p>
        </header>

        {/* Generations List */}
        {generations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generations.map((gen) => (
              <ProjectCard key={gen.id} gen={gen} setGenerations={setGenerations} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-medium mb-2">No Generations Yet!</h3>
            <p className="text-gray-400 mb-6">Start creating stunning product content today</p>
            <PrimaryButton onClick={() => navigate("/generate")}>
              Create New Generation
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGenerations;
