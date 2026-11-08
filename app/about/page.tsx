import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  "JavaScript / TypeScript",
  "React & Next. js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIS & GraphQL",
  "Shadcn UI",

];

export default function About() {
  return (
    <div className="space-y-8 max-w-3x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the Librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scambled it to make dummy text for Letraset's Body Type sheets. It has survived not only decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.   
          </p>
          <p>
           t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) =>(
              <span key={skill} className="rounded-full bg-secondary text-secondary-foreground text-sm px-3 py-1">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>  
  );
}
