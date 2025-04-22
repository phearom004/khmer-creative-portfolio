
import React from 'react';
import { Briefcase, Code, Image, Pen } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const skills = [
    { name: "ការរចនាម៉ាកយីហោ", icon: Briefcase, level: 90 },
    { name: "ការគូររូបភាព", icon: Pen, level: 85 },
    { name: "ការរចនាចំណុចប្រទាក់អ្នកប្រើ", icon: Code, level: 80 },
    { name: "ការរចនាសៀវភៅ", icon: Image, level: 75 },
  ];
  
  const tools = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 90 },
    { name: "Figma", level: 85 },
    { name: "Adobe InDesign", level: 80 },
  ];
  
  return (
    <section id="about" className="section-spacing bg-card">
      <div className="container-custom">
        <h2 className="section-title">អំពីខ្ញុំ</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg mb-6 animate-slide-up">
              ខ្ញុំជា <span className="font-bold">ពុទ្ធីមាន</span>, អ្នករចនាក្រាហ្វិកដែលមានបទពិសោធន៍ ៨ ឆ្នាំក្នុងការរចនាម៉ាកយីហោ, រូបភាព, និងចំណុចប្រទាក់អ្នកប្រើ។ ខ្ញុំមានចំណូលចិត្តក្នុងការបង្កើតការរចនាដែលមានន័យនិងផ្សារភ្ជាប់ឱ្យមនុស្សចងចាំ។
            </p>
            <p className="text-lg mb-6 animate-slide-up delay-100">
              ខ្ញុំធ្វើការជាមួយក្រុមហ៊ុននិងសហគ្រាសធុនតូចនិងមធ្យមដើម្បីជួយពួកគេឱ្យបង្ហាញអត្តសញ្ញាណនិងសារដ៏ល្អតាមរយៈការរចនាទាក់ទាញដែលជួយឱ្យពួកគេលេចធ្លោក្នុងទីផ្សារ។
            </p>
            <p className="text-lg mb-8 animate-slide-up delay-200">
              ការរចនារបស់ខ្ញុំគឺជាការរួមបញ្ចូលគ្នានៃស្ថាបត្យកម្មខ្មែរប្រពៃណីនិងការរចនាទំនើប, បង្កើតជាលទ្ធផលដែលមានអត្តសញ្ញាណខ្ពស់និងទាក់ទាញអារម្មណ៍។
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-slide-up delay-300">
              <div>
                <h3 className="text-xl font-medium mb-4">ជំនាញរបស់ខ្ញុំ</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-secondary" />
                        <span>{skill.name}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-secondary rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">ឧបករណ៍ដែលខ្ញុំប្រើ</h3>
                <div className="space-y-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="space-y-2">
                      <span>{tool.name}</span>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "order-1 lg:order-2 relative",
            "animate-slide-in-right"
          )}>
            <div className="relative z-10">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
                  alt="អ្នករចនាក្រាហ្វិក" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-5 -right-5 bg-card p-4 rounded-lg shadow-lg border border-border">
                <p className="font-medium">បទពិសោធន៍</p>
                <p className="text-3xl font-bold text-secondary">៨+ ឆ្នាំ</p>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card p-4 rounded-lg shadow-lg border border-border">
                <p className="font-medium">គម្រោងបញ្ចប់</p>
                <p className="text-3xl font-bold text-primary">១២០+</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-lg blur-xl z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
