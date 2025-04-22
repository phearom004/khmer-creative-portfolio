
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "ព័ត៌មានមិនគ្រប់គ្រាន់",
        description: "សូមបំពេញគ្រប់វាលទាំងអស់",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "សារបានផ្ញើដោយជោគជ័យ",
      description: "អរគុណសម្រាប់ការទាក់ទងមកខ្ញុំ! ខ្ញុំនឹងឆ្លើយតបទៅអ្នកក្នុងពេលឆាប់ៗនេះ។",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <h2 className="section-title">ទាក់ទងខ្ញុំ</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4">សូមផ្ញើសារមកខ្ញុំ</h3>
            <p className="mb-8">
              សូមទាក់ទងខ្ញុំដើម្បីបង្កើតការរចនាដ៏អស្ចារ្យជាមួយគ្នា! ខ្ញុំរីករាយក្នុងការឆ្លើយតបនឹងសំណួរនិងគម្រោងថ្មីរបស់អ្នក។
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">អ៊ីមែល</h4>
                  <p>design@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">ទូរស័ព្ទ</h4>
                  <p>+855 12 345 678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">ទីតាំង</h4>
                  <p>ភ្នំពេញ, កម្ពុជា</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">តាមខ្ញុំនៅលើបណ្តាញសង្គម</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card p-3 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card p-3 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className={cn(
            "bg-card p-6 rounded-lg shadow-md border border-border",
            "animate-slide-in-right"
          )}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                ឈ្មោះ
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="input-field" 
                placeholder="សូមបញ្ចូលឈ្មោះរបស់អ្នក"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                អ៊ីមែល
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="input-field" 
                placeholder="សូមបញ្ចូលអ៊ីមែលរបស់អ្នក"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                សារ
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                className="input-field" 
                placeholder="សូមបញ្ចូលសារសម្រាប់ខ្ញុំ"
              />
            </div>
            
            <Button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded transition-colors duration-300"
            >
              ផ្ញើសារ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
