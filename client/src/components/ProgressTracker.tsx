import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Trophy, Target, Calendar } from "lucide-react";
import { useState } from "react";

const modules = [
  {
    id: "mindset",
    title: "Mindset & Foundation",
    tasks: [
      "Understand affiliate marketing fundamentals",
      "Learn Daraz commission structure", 
      "Set realistic income expectations",
      "Identify common mistakes to avoid"
    ]
  },
  {
    id: "technical",
    title: "Technical Setup",
    tasks: [
      "Create Daraz account",
      "Apply for affiliate program",
      "Understand dashboard navigation",
      "Set up payment method"
    ]
  },
  {
    id: "niche",
    title: "Niche Selection",
    tasks: [
      "Research high-demand categories",
      "Analyze competition levels",
      "Select micro-niche",
      "Validate market demand"
    ]
  },
  {
    id: "traffic",
    title: "Traffic Methods",
    tasks: [
      "Choose primary platform",
      "Set up content channel",
      "Learn platform algorithms",
      "Create content strategy"
    ]
  },
  {
    id: "content",
    title: "Content Creation",
    tasks: [
      "Master review format",
      "Learn ethical promotion",
      "Create comparison content",
      "Develop copywriting skills"
    ]
  },
  {
    id: "conversion",
    title: "Conversion Optimization",
    tasks: [
      "Optimize call-to-action",
      "Build trust elements",
      "Implement scarcity tactics",
      "Track conversion metrics"
    ]
  }
];

export default function ProgressTracker() {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set([
    "mindset-0",
    "mindset-1", 
    "technical-0"
  ]));

  const toggleTask = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const totalTasks = modules.reduce((acc, module) => acc + module.tasks.length, 0);
  const completedCount = completedTasks.size;
  const progressPercentage = (completedCount / totalTasks) * 100;

  const getModuleProgress = (moduleId: string) => {
    const moduleTasks = modules.find(m => m.id === moduleId)?.tasks || [];
    const completedInModule = moduleTasks.filter((_, idx) => 
      completedTasks.has(`${moduleId}-${idx}`)
    ).length;
    return (completedInModule / moduleTasks.length) * 100;
  };

  const getNextMilestone = () => {
    if (progressPercentage >= 100) return "🎉 Course Complete!";
    if (progressPercentage >= 75) return "Almost there - Final stretch!";
    if (progressPercentage >= 50) return "Halfway point - Keep going!";
    if (progressPercentage >= 25) return "Good progress - Building momentum!";
    return "Just getting started - You got this!";
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-[#F8F9FA] border-l-4 border-l-[#2C3E50]">
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-6 h-6 text-[#2C3E50]" />
        <h3 className="text-xl font-bold text-[#2C3E50]">Learning Progress Tracker</h3>
      </div>

      {/* Overall Progress */}
      <div className="mb-8 p-4 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] rounded-lg text-white">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-semibold text-lg">Overall Progress</h4>
            <p className="text-white/80 text-sm">{getNextMilestone()}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{Math.round(progressPercentage)}%</div>
            <div className="text-sm text-white/80">{completedCount}/{totalTasks} tasks</div>
          </div>
        </div>
        <Progress value={progressPercentage} className="h-3 bg-white/20" />
      </div>

      {/* Module Progress */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {modules.map((module) => {
          const moduleProgress = getModuleProgress(module.id);
          const isCompleted = moduleProgress === 100;
          
          return (
            <Card key={module.id} className={`p-4 ${isCompleted ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-[#2C3E50]">{module.title}</h5>
                {isCompleted ? (
                  <Trophy className="w-5 h-5 text-yellow-500" />
                ) : (
                  <span className="text-sm text-gray-500">{Math.round(moduleProgress)}%</span>
                )}
              </div>
              <Progress value={moduleProgress} className="h-2 mb-2" />
              <div className="text-xs text-gray-500">
                {module.tasks.filter((_, idx) => completedTasks.has(`${module.id}-${idx}`)).length} of {module.tasks.length} completed
              </div>
            </Card>
          );
        })}
      </div>

      {/* Detailed Task List */}
      <div className="space-y-4">
        <h4 className="font-semibold text-[#2C3E50] mb-3">Detailed Tasks</h4>
        {modules.map((module) => (
          <Card key={module.id} className="p-4 border border-gray-200">
            <h5 className="font-medium text-[#2C3E50] mb-3">{module.title}</h5>
            <div className="space-y-2">
              {module.tasks.map((task, idx) => {
                const taskId = `${module.id}-${idx}`;
                const isCompleted = completedTasks.has(taskId);
                
                return (
                  <div 
                    key={taskId}
                    className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleTask(taskId)}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                      {task}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>

      {/* Motivational Section */}
      <div className="mt-6 p-4 bg-[#E8F5E8] border-l-4 border-l-[#27AE60] rounded">
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-5 h-5 text-[#27AE60]" />
          <h5 className="font-semibold text-[#2C3E50]">Estimated Timeline</h5>
        </div>
        <p className="text-sm text-gray-700 mb-2">
          Based on your current progress, you're on track to complete this course in approximately:
        </p>
        <div className="text-lg font-bold text-[#27AE60]">
          {Math.ceil((totalTasks - completedCount) * 2)} days
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Assuming 2-3 tasks completed daily. Stay consistent!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
          Download Progress Report
        </Button>
        <Button variant="outline" className="border-[#2C3E50] text-[#2C3E50]">
          Reset Progress
        </Button>
      </div>
    </Card>
  );
}
