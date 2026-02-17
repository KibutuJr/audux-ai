import { useEffect, useState } from "react";
import type { Project } from "../types";
import {
  ImageIcon,
  Link as LinkIcon,
  Loader2Icon,
  RefreshCcwIcon,
  SparkleIcon,
  VideoIcon,
} from "lucide-react";
import { GhostButton, PrimaryButton } from "../components/Buttons";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import api from "../configs/axios";
import toast from "react-hot-toast";

const Result = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const [project, setProjectData] = useState<Project>({} as Project);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const fetchProjectData = async () => {
    try {
      const token = await getToken();
      const { data } = await api.get(`/api/user/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjectData(data.project);
      setIsGenerating(data.project.isGenerating);
      setLoading(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
      console.error(error);
      setLoading(false);
    }
  };

  const handleGenerateVideo = async () => {
    setIsGenerating(true);
    try {
      const token = await getToken();
      const { data } = await api.post(
        "/api/project/video",
        { projectId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProjectData((prev) => ({
        ...prev,
        generatedVideo: data.videoUrl,
        isGenerating: false,
      }));
      toast.success(data.message);
      setIsGenerating(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
      console.error(error);
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (user && !project.id) {
      fetchProjectData();
    } else if (isLoaded && !user) {
      navigate("/");
    }
  }, [user, isLoaded, project.id, navigate]);

  // Fetch project every 10 seconds if generating
  useEffect(() => {
    if (user && isGenerating) {
      const interval = setInterval(() => {
        fetchProjectData();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [user, isGenerating]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2Icon className="animate-spin text-indigo-400 w-9 h-9" />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-medium">Generation Result</h1>
          <Link
            to="/generate"
            className="btn-secondary text-sm flex items-center gap-2"
          >
            <RefreshCcwIcon className="w-4 h-4" />
            <span className="max-sm:hidden">New Generation</span>
          </Link>
        </header>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Result Display */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel inline-block p-2 rounded-2xl">
              <div
                className={`${
                  project?.aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-video"
                } sm:max-h-[200px] rounded-xl bg-gray-900 overflow-hidden relative`}
              >
                {project?.generatedVideo ? (
                  <video
                    src={project.generatedVideo}
                    controls
                    autoPlay
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.generatedImage}
                    alt="Generated Result"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            {/* Download Buttons */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Actions</h3>
              <div className="flex flex-col gap-3">
                <a href={project.generatedImage} download>
                  <GhostButton
                    disabled={!project.generatedImage}
                    className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ImageIcon className="w-4.5 h-4.5" />
                    Download Image
                  </GhostButton>
                </a>
                <a href={project.generatedVideo} download>
                  <GhostButton
                    disabled={!project.generatedVideo}
                    className="w-full justify-center rounded-md py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <VideoIcon className="w-4.5 h-4.5" />
                    Download Video
                  </GhostButton>
                </a>
              </div>
            </div>

            {/* Generate Video Button */}
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <VideoIcon className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Magic</h3>
              <p className="text-gray-400 text-sm mb-6">
                Turn static images into dynamic videos for social media
              </p>
              {!project.generatedVideo ? (
                <PrimaryButton
                  onClick={handleGenerateVideo}
                  disabled={isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>Generating Video...</>
                  ) : (
                    <>
                      <SparkleIcon className="w-4 h-4" /> Generate Video
                    </>
                  )}
                </PrimaryButton>
              ) : (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center text-sm font-medium">
                  Video Generated Successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
