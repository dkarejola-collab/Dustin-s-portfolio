import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDot, Gamepad2, Footprints, Compass, Tv, BookOpen } from "lucide-react";

const hobbies = [
  {
    title: "Basketball",
    icon: CircleDot,
    description: "Passionate about shooting hoops and team gameplay.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Driven by ranked climbs, esports, and competitive mastery.",
  },
  {
    title: "Walking",
    icon: Footprints,
    description: "Dedicated to daily steps and refreshing outdoor movement.",
  },
  {
    title: "Strolling",
    icon: Compass,
    description: "Enjoys leisurely paces, fresh air, and scenic exploring.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "Avid explorer of fictional worlds and lifelong learning.",
  },
  {
    title: "Watching",
    icon: Tv,
    description: "Fan of cinematic storytelling, series, and engaging narratives.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding .</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 1g:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover: shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-1g text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-1g">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}