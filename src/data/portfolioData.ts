
export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  tools: string;
  category: string;
  imageUrl: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "ការរចនាម៉ាកយីហោសម្រាប់ហាងកាហ្វេ",
    description: "ការរចនាម៉ាកយីហោនិងការកំណត់អត្តសញ្ញាណសម្រាប់ហាងកាហ្វេក្នុងស្រុក។ រួមមានឡូហ្គោ, កញ្ចប់, ម៉ឺនុយ និងកម្មវិធីសង្គម។",
    tools: "Adobe Illustrator, Photoshop",
    category: "ម៉ាកយីហោ",
    imageUrl: "https://images.unsplash.com/photo-1620372669113-084d8c955d36?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "ការរចនាអត្ថបទសៀវភៅ",
    description: "ការរចនាទំព័រដែលមានចំណងជើងនិងអត្ថបទ រួមទាំងការរចនាគម្របសៀវភៅ សម្រាប់សៀវភៅកំណាព្យ។",
    tools: "Adobe InDesign, Illustrator",
    category: "ការបោះពុម្ព",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "រចនាគេហទំព័រសម្រាប់អ្នកលក់ផលិតផល",
    description: "គេហទំព័រមួយដែលគាំទ្រការលក់ផលិតផលសិប្បកម្មខ្មែរ និងបង្ហាញពីរបៀបប្រើប្រាស់វា។",
    tools: "Figma, Adobe Photoshop",
    category: "គេហទំព័រ",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "គំនូរប្រលោមលោកខ្មែរ",
    description: "ការបង្កើតគំនូរប្រលោមលោកសម្រាប់រឿងនិទានខ្មែរបុរាណ ដែលរួមបញ្ចូលគ្នានូវចម្លាក់ខ្មែរនិងរចនាប័ទ្មទំនើប។",
    tools: "Procreate, Adobe Photoshop",
    category: "គំនូរ",
    imageUrl: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "រចនាសម្រាប់ផលិតផលប្រៃសណីយ៍",
    description: "ការរចនាប្រអប់និងកញ្ចប់សម្រាប់ផលិតផលប្រៃសណីយ៍ រួមទាំងស្លាកស្និទ្ធនិងព័ត៌មាននៃផលិតផល។",
    tools: "Adobe Illustrator, Dimension",
    category: "ម៉ាកយីហោ",
    imageUrl: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "រូបភាពផលិតផលអាហារ",
    description: "ការថតរូបនិងរៀបចំផលិតផលអាហារខ្មែរសម្រាប់ប្រើប្រាស់ក្នុងម៉ឺនុយហាងនិងការផ្សាយពាណិជ្ជកម្ម។",
    tools: "Adobe Lightroom, Photoshop",
    category: "រូបថត",
    imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "ការរចនាកម្មវិធីលើទូរស័ព្ទ",
    description: "ការរចនាចំណុចប្រទាក់អ្នកប្រើសម្រាប់កម្មវិធីទូរស័ព្ទសម្រាប់ក្រុមហ៊ុនដឹកជញ្ជូនម្ហូបអាហារ។",
    tools: "Figma, Adobe XD",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1622542796254-5b9c46a259b9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "ការរចនាសម្រាប់ព្រឹត្តិការណ៍",
    description: "ការរចនាឡូហ្គោ បដា និងការផ្សព្វផ្សាយសម្រាប់ព្រឹត្តិការណ៍វប្បធម៌ខ្មែរប្រចាំឆ្នាំ។",
    tools: "Adobe Illustrator, Photoshop",
    category: "ម៉ាកយីហោ",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
  }
];

export const categories = [
  "ទាំងអស់",
  "ម៉ាកយីហោ",
  "ការបោះពុម្ព",
  "គេហទំព័រ",
  "គំនូរ",
  "រូបថត",
  "UI/UX"
];

export const testimonials = [
  {
    id: 1,
    name: "សុវណ្ណា ម៉េង",
    position: "ម្ចាស់ហាងកាហ្វេ",
    quote: "ការងាររចនារបស់ពុទ្ធីមានបានជួយឱ្យអាជីវកម្មរបស់យើងមានអត្តសញ្ញាណច្បាស់លាស់ក្នុងទីផ្សារ។ ខ្ញុំពេញចិត្តនឹងគំនិតច្នៃប្រឌិត និងគុណភាពការងារដ៏ល្អឥតខ្ចោះ!",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "កញ្ញា ពៅ",
    position: "អ្នកនិពន្ធ",
    quote: "ពុទ្ធីមានបានបង្កើតគំនូរប្រកបដោយអារម្មណ៍និងស្ថាបត្យកម្មខ្មែរសម្រាប់សៀវភៅរបស់ខ្ញុំ។ គាត់យល់ពីស្មារតីនៃសាច់រឿងនិងបង្កើតបានជាគំនូរដែលនិទានរឿងដោយខ្លួនឯង។",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "វិចិត្រ សុខា",
    position: "អ្នកគ្រប់គ្រងក្រុមហ៊ុនបច្ចេកវិទ្យា",
    quote: "ការរចនា UI/UX របស់ពុទ្ធីមានបានធ្វើឱ្យកម្មវិធីរបស់យើងងាយស្រួលប្រើប្រាស់និងមានភាពទាក់ទាញប្រកបដោយស្ថាបត្យកម្មខ្មែរ។ ប្រតិកម្មពីអតិថិជនរបស់យើងគឺល្អបំផុត!",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  }
];

export const services = [
  {
    id: 1,
    title: "ការរចនាម៉ាកយីហោ",
    description: "បង្កើតម៉ាកយីហោដែលមានអត្តសញ្ញាណ និងរូបភាពអាជីវកម្មដែលឆ្លុះបញ្ចាំងពីគុណតម្លៃ និងបេសកកម្មរបស់អ្នក។",
    icon: "briefcase"
  },
  {
    id: 2,
    title: "ការគូររូបភាព",
    description: "បង្កើតគំនូរដែលនិទានរឿងនិងទាក់ទាញអារម្មណ៍ សម្រាប់ផលិតផល សៀវភៅ ឬការផ្សព្វផ្សាយអាជីវកម្ម។",
    icon: "pen"
  },
  {
    id: 3,
    title: "ការរចនាចំណុចប្រទាក់អ្នកប្រើ",
    description: "បង្កើតបទពិសោធន៍ប្រើប្រាស់ដែលងាយស្រួលសម្រាប់គេហទំព័រ និងកម្មវិធីទូរស័ព្ទដែលមានរូបរាងទាក់ទាញ។",
    icon: "code"
  },
  {
    id: 4,
    title: "ការរចនាសៀវភៅ",
    description: "រចនាគម្របសៀវភៅនិងទំព័រខាងក្នុងដែលទាក់ទាញអារម្មណ៍អ្នកអាននិងឆ្លុះបញ្ចាំងពីខ្លឹមសារនៃសៀវភៅ។",
    icon: "book"
  },
  {
    id: 5,
    title: "ការថតរូប",
    description: "ផ្តល់ជូនសេវាថតរូបផលិតផល បុគ្គល និងព្រឹត្តិការណ៍ដើម្បីប្រើប្រាស់ក្នុងការផ្សព្វផ្សាយនិងប្រព័ន្ធផ្សព្វផ្សាយសង្គម។",
    icon: "camera"
  },
  {
    id: 6,
    title: "ការរចនាផ្សព្វផ្សាយ",
    description: "បង្កើតឯកសារផ្សព្វផ្សាយដែលទាក់ទាញនិងមានប្រសិទ្ធភាពសម្រាប់ប្រព័ន្ធផ្សព្វផ្សាយផ្សេងៗ ដូចជាបដា ប្រព័ន្ធសង្គម និងវេបសាយ។",
    icon: "image"
  }
];
