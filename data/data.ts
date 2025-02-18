export const gigboosterservices = [
  {
    name: 'Gig Title Creation',
    description: 'Create an seo friendly gig title for your gig',
    toolsdescription: 'Craft persuasive Fiverr gig titles using this generator, focusing on unique selling points and employing action verbs to draw in potential buyers.',
    prompt: 'Transform into a Fiverr Gig Title Creator. Your task: craft an engaging, 65-character max title, based on service name and main benefits. The title should start with I will, followed by a concise description of my service. Use strong action verbs and focus on [specific service skill or offering]. Include a key benefit or unique selling point. The title should be catchy yet professional, immediately telling buyers what I offer. Example: I will design modern logos to boost your brand identity. Create 5 options. The output should be in the following format and make sure after each title goes to a new line and also make sure that the word [title n] shoud be bold :\n\nHere are 5 Fiverr gig title options:\n\n*Title 1*: I will...\n\n*Title 2*: I will...\n\n*Title 3*: I will...\n\n*Title 4*: I will...\n\n*Title 5*: I will...',
    slug: 'gig-title-creation',
    form:  [
      {
        label: 'Service Name',
        field: 'input',
        name: 'service name',
        required: true,
      },
      {
        label: 'Main Benefits',
        field: 'textarea',
        name: 'main benfits',
        required: true,
      }
    ]
  },

  {
    name: 'Gig Category and Subcategory',
    description: 'Find the best category and subcategory for your gig',
    prompt: 'Transform into a Fiverr Category Expert. Your mission is to guide me in selecting the optimal category and subcategory for my Gig related to service provided and service description. Suggest the most appropriate main category and subcategory. Remember, category selection is crucial for reaching the right audience on Fiverr give me 4 category and subcategory that my service could fit in dont give me (Why this works) or (Remember) i want only category and subcategory  . \n the output should be in the following format \n Gategorie : [Generated Gategorie ] \n Subgategorie : [Generated Subgategorie] \n .',
    slug: 'category-and-subcategory',
    form:  [
      {
        label: 'Service Provided',
        field: 'input',
        name: 'service provided',
        required: true,
      },
      {
        label: 'Service Description',
        field: 'textarea',
        name: 'service description',
        required: true,
      }
    ]
  },

  {
    name: 'Gig Search Tags',
    description: 'Get the most performing search tags for your gig',
    prompt: 'Transform into a Fiverr SEO Specialist with expertise in service name optimization. Your mission is to develop a comprehensive 5 keyword  that will maximize my Gigs visibility and attract my ideal clients based on service name and service description  . Begin by conducting a thorough analysis of my Gigs unique offerings, target audience, and competitive landscape within the [specific service] niche on Fiverr. Then, identify and prioritize a mix of high-volume and medium-tail keywords that precisely capture the essence of my services. Go beyond simply listing keywords; provide a strategic breakdown of how each keyword aligns with search trends. you should provide me with 4 set of 5 keywords. dont give me any Additional Tips and for the output should be the following . \n keywords : [the 5 generated keywords separed by a , ex: keywrd 1, keyword 2, ....] \n keywords : [the 5 generated keywords separed by a , ex: keywrd 1, keyword 2, ....] etc... ',
    slug: 'gig-tags',
    form:  [
      {
        label: 'Service Name',
        field: 'input',
        name: 'service name',
        required: true,
      },
      {
        label: 'Detailed service description',
        field: 'textarea',
        name: 'service description',
        required: true,
      }
    ]
  },
  
  {
    name: 'Gig Packages Naming and Describing Offerings',
    description: '',
    prompt: "Assume the role of a Fiverr Package Designer specializing in service name. Your task is to create a strategic, market-driven package structure that maximizes appeal and profitability based on service name and service description. Begin by analyzing current market trends, competitor offerings, and buyer preferences in the service name niche. Then, craft three distinct packages based on the number of packages. If the number of packages is 3, you can use the following names - Basic, Standard, and Premium - or you can make unique names for the packages. If the number of packages is 1, provide just one package. Each package should have a compelling, 3 to 4 benefit-driven name that instantly communicates its value. One important thing: ensure that the benefits should be a maximum of 90 characters. Ensure a logical progression of value from Basic to Premium, with each tier offering noticeably increased benefits to encourage upsells. Incorporate psychological pricing strategies and suggest competitive yet profitable price points for each package. Additionally, recommend optional extras or gig add-ons that complement the packages and provide opportunities for increased earnings. and make sure dont provide me with Market Analysis and the Pricing Strategy. Please format the output as follows:\n\nPackage Name: \"Basic Package Name\"\nPrice: $[Price]\nDeliverables:\n\n[List of deliverables with bullet points]\n\nPackage Name: \"Standard Package Name\"\nPrice: $[Price]\nDeliverables:\n\n[List of deliverables with bullet points]\n\nPackage Name: \"Premium Package Name\"\nPrice: $[Price]\nDeliverables:\n\n[List of deliverables with bullet points]\n\nOptional Extras/Add-ons:\n- [Add-on name]: $[Price]\n- [Add-on name]: +$[Price]",
    slug: 'packages-names-and-offers',
    form:  [
      {
        label: 'Service Name',
        field: 'input',
        name: 'service name',
        required: true,
      },
      {
        label: 'Detailed service description',
        field: 'textarea',
        name: 'service description',
        required: true,
      }
    ]
  },

  {
    name: 'Gig Description',
    description: 'Create unique convincing gig description ',
    prompt: "step into the shoes of a Fiverr Gig Description Writer. Your task is to write a detailed and engaging description for my Gig based on service name, service benefits and user description, maximum 1100 characters, that clearly explains what buyers can expect from my [specific service]. The description should be thorough and convincing, highlighting my skills, experience, and why buyers should choose my Gig. Use markdown formatting and bold important parts, and use bullets to make the description more convincing and converting. Remember, the description must adhere to Fiverr’s guidelines, avoiding any external links or contact information, but you must use best copywriting techniques you should those question that will help you make the best description : \n 1 what service do you offer \n 2 what skills do you have \n 3 what problem do you solve \n 4 what benfits do you provide  \n 5 whats happens if you dont buy \n 6 why you vs competitor \n 7 what is like yo work with you the description shoul contain 4 main blocks : \n block 1 : a probleme the client suffer from in a form of a question ex: are you struggling to grow you audiance? \n block 2 : 1-2 lines of text that explains what they get if they buy \n block 3 : bulletd list listing the skills and what specifically you can help them with (use the given 2-5 questions) \n block 4 : all about the user and why him vs the competitors and why the client should hire him (use question 7 ) heres an example you can use : \n My name is Mike, with this gig I will work with you to save time and level up your YouTube video editing! \n Depending on which package you select, I will: \n Edit your RAW video files into polished YouTube Videos \n Edit using Davinci Resolve or Adobe Premiere Pro \n Create motion graphics in After Effects \n Help boost subscribers \n Working with me is simple. You answer a short list of questions, we discuss your project, then you send over your video files and I do the rest! \n Ive been editing for over 3 years and love what I do. During that time I've developed my own unique style of editing that get results. ",
    slug: 'gig-description',
    form:  [
      {
        label: 'Service Name',
        field: 'input',
        name: 'service name',
        required: true,
      },
      {
        label: 'Benefits of your service',
        field: 'textarea',
        name: 'service benefits',
        required: true,
      },
      {
        label: 'A description about you',
        field: 'textarea',
        name: 'user description',
        required: true,
      }
    ]
  },

  {
    name: 'Gig FAQs',
    description: 'Create engaging FAQs for your needs',
    prompt: "Act as a Fiverr FAQ Creator. Compile a list of frequently asked questions for my Gig and their answers based on service name and Detailed service description . Consider buyers’ common queries or concerns about my [specific service] and provide clear, concise answers. This will help preemptively address buyer’s questions and make my Gig page more informative.",
    slug: 'gig-faqs',
    form:  [
      {
        label: 'Service Name',
        field: 'input',
        name: 'service name',
        required: true,
      },
      {
        label: 'Detailed service description',
        field: 'textarea',
        name: 'service description',
        required: true,
      }
    ]
  }
]