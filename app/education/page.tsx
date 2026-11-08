import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    School: "Tabuco Central School",
    Year: "2013-2019",
    Education: "Elementary",
    description: "A vibrant world of foundational learning, creative projects, and classroom discoveries.",
    achievements: ["With Honors"],
  },
  {
    School: "Camarines Sur National Highschool",
    Year: "2019-2023",
    Education: "Junior High School",
    description: "Navigating new academic challenges, elective subjects, and personal growth.",
    achievements: ["With Honors"],
  },
  {
    School: "Naga College Foundation",
    Year: "2023-2025",
    Education: "Junior High School",
    description: "Diving deep into specialized tracks, elective subjects, and future aspirations.",
    achievements: ["With Honors"],
  },
];  

export default function Education() {
  return (
    <div className="space-y-8 max-w-3x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background and formal training.</p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-1g text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.School}</CardTitle>
                    <CardDescription>{item.Education}</CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.Year}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  <Award className="h-4 w-4 text-primary" /> Key Highlights
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}     