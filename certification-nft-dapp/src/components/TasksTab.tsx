"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Zap } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
  action?: string;
}

interface TasksTabProps {
  isDarkMode: boolean;
  isTransitioning: boolean;
  previousTab: string | null;
}

export function TasksTab({
  isDarkMode,
  isTransitioning,
  previousTab,
}: TasksTabProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Connect Wallet",
      description: "Connect your TON wallet to get started",
      reward: 100,
      completed: false,
      action: "wallet",
    },
    {
      id: "2",
      title: "Complete First Course",
      description: "Finish the blockchain basics course",
      reward: 250,
      completed: false,
      action: "course",
    },
    {
      id: "3",
      title: "Mint Your First NFT",
      description: "Create and mint your first certificate",
      reward: 500,
      completed: false,
      action: "mint",
    },
    {
      id: "4",
      title: "Share with Friends",
      description: "Invite 3 friends to join the platform",
      reward: 150,
      completed: false,
      action: "share",
    },
    {
      id: "5",
      title: "Complete Gallery",
      description: "View all available certificates",
      reward: 75,
      completed: false,
      action: "gallery",
    },
  ]);

  const [totalRewards, setTotalRewards] = useState(0);

  useEffect(() => {
    const completed = tasks.filter((t) => t.completed).length;
    const rewards = tasks
      .filter((t) => t.completed)
      .reduce((sum, t) => sum + t.reward, 0);
    setTotalRewards(rewards);
  }, [tasks]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  return (
    <div
      className={`transition-all duration-300 ${
        isTransitioning && previousTab === "tasks" ? "opacity-50" : "opacity-100"
      }`}
    >
      {/* Progress Section */}
      <div
        className={`rounded-2xl p-6 mb-6 ${
          isDarkMode
            ? "bg-gradient-to-br from-[#1da1f2]/20 to-[#6366f1]/20 border border-[#1da1f2]/30"
            : "bg-gradient-to-br from-[#1da1f2]/10 to-[#6366f1]/10 border border-[#1da1f2]/20"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-[#14171a]"
              }`}
            >
              Tasks & Rewards
            </h2>
            <p
              className={`text-sm mt-1 ${
                isDarkMode ? "text-[#8899a6]" : "text-[#536471]"
              }`}
            >
              {completedCount} of {tasks.length} completed
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-2xl font-bold text-yellow-400">
                {totalRewards}
              </span>
            </div>
            <p
              className={`text-xs ${
                isDarkMode ? "text-[#8899a6]" : "text-[#536471]"
              }`}
            >
              Total Points
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className={`w-full h-2 rounded-full overflow-hidden ${
            isDarkMode ? "bg-[#2f3336]" : "bg-[#e1e8ed]"
          }`}
        >
          <div
            className="h-full bg-gradient-to-r from-[#1da1f2] to-[#6366f1] rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
              task.completed
                ? isDarkMode
                  ? "bg-[#1da1f2]/10 border-[#1da1f2]/30"
                  : "bg-[#1da1f2]/5 border-[#1da1f2]/20"
                : isDarkMode
                  ? "bg-[#192734] border-[#2f3336] hover:border-[#1da1f2]/50"
                  : "bg-[#f7f9fa] border-[#e1e8ed] hover:border-[#1da1f2]/50"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="pt-1 flex-shrink-0">
                {task.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-[#1da1f2]" />
                ) : (
                  <Circle
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-[#536471]" : "text-[#bcc7cf]"
                    }`}
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3
                  className={`font-semibold text-sm transition-all ${
                    task.completed
                      ? isDarkMode
                        ? "text-[#1da1f2] line-through"
                        : "text-[#1da1f2] line-through"
                      : isDarkMode
                        ? "text-white"
                        : "text-[#14171a]"
                  }`}
                >
                  {task.title}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    isDarkMode ? "text-[#8899a6]" : "text-[#536471]"
                  }`}
                >
                  {task.description}
                </p>
              </div>

              <div className="flex-shrink-0 text-right pt-1">
                <div className="flex items-center gap-1 justify-end">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span
                    className={`font-bold text-sm ${
                      task.completed
                        ? "text-[#1da1f2]"
                        : "text-yellow-400"
                    }`}
                  >
                    +{task.reward}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completed Message */}
      {completedCount === tasks.length && (
        <div
          className={`mt-6 p-4 rounded-xl text-center border-2 ${
            isDarkMode
              ? "bg-[#1da1f2]/10 border-[#1da1f2]/50"
              : "bg-[#1da1f2]/5 border-[#1da1f2]/30"
          }`}
        >
          <p
            className={`font-semibold ${
              isDarkMode ? "text-[#1da1f2]" : "text-[#1da1f2]"
            }`}
          >
            🎉 All tasks completed! Keep checking back for new challenges.
          </p>
        </div>
      )}
    </div>
  );
}
