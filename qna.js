import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
//update the code so that user's can only input.. 

var responseText = '';

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Function to get career recommendations based on user input
async function getCareerRecommendations(userInput) {
  console.log('Starting getCareerRecommendations with input:', userInput);
  try {
    console.log('Calling Gemini API...');
    const startTime = Date.now();

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Only choose from the list of available bachelors in the user input. Here are the options: College of Arts, Sciences and Education: Offers a Bachelor of Arts in Biological Sciences, Chemistry, Earth Sciences, English, English Education, Global Educational Studies, Interdisciplinary Studies, Liberal Studies, Mathematics with Mathematics Education, Natural and Applied Sciences, Philosophy, Physics, Psychology, Rehabilitation and Recreational Therapy, Sustainability and the Environment, Women's and Gender Studies. It also offers a Bachelor of Science in Behavioral Neuroscience, Biochemistry, Biological Sciences, Chemistry, Early Childhood Education, Elementary Education, Environmental Studies, Exceptional Student Education, Geosciences, Marine Biology, Mathematical Sciences, Physics, Physical Education, Sport and Recreation Management, Rehabilitation and Recreational Therapy, Statistics. College of Business: Offers a Bachelor of Accounting and a Bachelor of Business Administration with a Major in Business Analytics, Finance, Human Resource Management, International Business, Logistics and Supply Chain Management, Management, Management Information Systems, Marketing, Real Estate. College of Communication, Architecture + The Arts: Offers an Accelerated Master of Architecture, Interior Architecture, Landscape Architecture. It also offers a Bachelor of Arts in Art, Art History, Communication Arts, Music, Theatre, and a Bachelor of Fine Arts in Art, Theatre, Digital Arts. Additionally, it offers a Bachelor of Music and a Bachelor of Science in Art Education. College of Engineering and Computing: Offers a Bachelor of Arts in Information Technology, Computer Science, and a Bachelor of Science in Biomedical Engineering, Civil Engineering, Computer Engineering, Computer Science, Construction Management, Cybersecurity, Electrical Engineering, Environmental Engineering, Information Technology, Interdisciplinary Engineering, Internet of Things, Mechanical Engineering. Nicole Wertheim College of Nursing and Health Sciences: Offers a Bachelor of Health Services Administration and a Bachelor of Science in Nursing. Robert Stempel College of Public Health and Social Work: Offers a Bachelor of Arts in Disaster Management and a Bachelor of Science in Dietetics and Nutrition, Social Work. Chaplin School of Hospitality and Tourism Management: Offers a Bachelor of Arts in Global Sustainable Tourism and a Bachelor of Science in Hospitality and Tourism Management. Steven J. Green School of International and Public Affairs: Offers a Bachelor of Arts in Asian Studies, Economics, History, International Relations, Latin American and Caribbean Studies, Political Science, Religious Studies, Spanish. It also offers a Bachelor of Arts in Global Languages, Cultures and Literatures with Majors in French and Francophone Studies, Portuguese and Lusophone Studies, Dual Majors. Additionally, it offers a Bachelor of Arts in Global Studies with Majors in Anthropology, Geography, Sociology, Interdisciplinary and Area Studies, as well as a Bachelor of Science in Criminal Justice, Crime Science, Economics, and a Bachelor of Public Policy and Service. Based on the following user preferences and the list of possible options, suggest the top 3 bachelor degrees that align with the user's preferences, specify the college as well. Carefully analyze the responses and the possible choices to ensure you provide the most accurate and relevant recommendations. Add a brief description of the degree and separate the recommendation with a newline. Also ensure that there are no asterisks in the output. Format each recommendation as follows: 1. Degree (College): Description, new paragraph. Do the same for 2. and 3. ${userInput}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    responseText = text;

    const endTime = Date.now();
    console.log(`Gemini API call completed in ${endTime - startTime}ms`);
    return text;
  } catch (error) {
    console.error('Error in getCareerRecommendations:', error);
    throw error;
  }
}

async function getNetworkingRecommendations(userInput) {
    console.log('Starting getNetworkingRecommendations with input:', userInput);
    try {
      console.log('Calling Gemini API for networking recommendations...');
      const startTime = Date.now();
  
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      const prompt = `Based on the following user preferences, suggest the top 3 school organizations or 
      clubs to join that would be beneficial for networking and career development. 
      For each organization, provide a brief description of its focus and potential benefits. 
      User preferences: ${userInput},
      Here is all the organizations a FIU:Here are the names of the organizations without the descriptions:

- Adam Smith Center for Economic Freedom
- International Society of Automation
- Tech Flow at FIU
- Academic Student Organizations
- Activity and Service Business Office - ASBO
- Adventist Christian Fellowship
- Afghanistan Education Student Outreach Project
- African and African Diaspora Studies Graduate Student Association
- African Graduate Students Association
- African Student Association
- AIESEC in Miami
- Aikido
- Alpha Chi Omega
- Alpha Epsilon Delta
- Alpha Epsilon Pi
- Alpha Eta Mu Beta
- Alpha Kappa Alpha Sorority, Inc.
- Alpha Kappa Psi
- Alpha Omicron Pi
- Alpha Phi Alpha Fraternity, Inc.
- Alpha Phi Sigma
- Alpha Psi Omega
- Alpha Rho Chi
- Alpha Xi Delta
- Alternative Breaks
- American Association of Colombian Engineers FIU Student Chapter
- American Association of Physicians of Indian Origin
- American Association of Venezuelan Engineers
- American Civil Liberties Union (ACLU) Club - For The Panthers
- American Institute of Architecture Students
- American Marketing Association
- American Medical Association/Florida Medical Association
- American Medical Student Association
- American Medical Women’s Association
- American Society For Engineering Management
- American Society of Civil Engineers
- American Society of Landscape Architects @ FIU
- American Society of Mechanical Engineers
- American Society of Photogrammetry and Remote Sensing Florida International University Student Chapter
- American Student Dental Association FIU Chapter
- Anesthesiology Interest Group
- Art History Student Association
- Artificial Intellegence & Coding Club
- Artificial Intelligence at Florida International University
- Arts and Chats
- Asian American Medical Student Group
- Asian Student Union
- Assoc. of Grad. Students in Dietetics and Nutrition (AGSDN)
- Associated General Contractors of America-Student Chapter
- Association for Information Systems
- Association of Latino Professionals for America
- Association of Pre-Physician Associates
- Association of Women in Mathematics at FIU
- Athletic Training Student Organization
- Back Of House
- Badminton
- Bangladesh Student Organization
- Baptist Collegiate Ministries
- Bartenders Guild at FIU
- Bayview
- Bayview Hall Council
- BBC Biscayne Bay Campus Science Club
- BBC National Society of Minorities in Hospitality
- Beta Alpha Psi
- Beta Beta Beta
- Beta Theta Pi
- Bhakti Yoga Club at FIU
- Biomedical Engineering Society
- Black Student Union
- Black Women in Law
- Board Game Club @ FIU
- BookTok @ FIU
- Brazilian Jiu-Jitsu Club
- Brazilian Student Association
- Break Through Tech - Knight Foundation School of Computing & Information Sciences
- Brewers' Collective at FIU
- Bubble City Community Project
- Business & Medicine Interest Group
- Business Doctoral Student Association
- Campus Bible Fellowship
- Campus Life BBC Branch
- Career and Talent Development
- Career Connect
- Caribbean Community Graduate Students Association
- Caribbean Students Association at Florida International University
- Center for Academic Success
- Center for Excellence in Writing
- Center for Fraternity & Sorority Enrichment
- Center for Leadership
- Center for Leadership and Service
- Center for Leadership and Service (CLS) Programs
- Center for Student Engagement
- Centers for Student Engagement
- Central Asian Student Association
- Chabad FIU
- Chemical Society at FIU
- Chess Club
- Chi Alpha
- Chi Epsilon
- Chi Sigma Iota (Delta Iota Chapter) - Counseling Honors Society
- Children's Creative Learning Center
- Chinese Club
- Christian Medical and Dental Association
- Circle K International
- Clean Lyfe Community
- Clinical Understudy and Research Education
- CLS Advanced Leadership Challenge (ALC)
- Club for Roleplaying, Imagination and Tabletops
- Club for Undergraduate Economics Students at FIU
- CODE CRUNCH
- Code Culture
- College Democrats of FIU
- College Life Coaching Program
- College of Arts, Sciences & Education
- College Panhellenic Council
- College Republicans at FIU
- Common Reading Program
- Common Sense Action
- Counseling & Psychological Services
- Creative + Media (Student Life and Development)
- Cuban American Association of Civil Engineers
- Cuban Heritage Society
- Delta Epsilon Mu
- Delta Phi Epsilon
- Delta Sigma Phi
- Delta Sigma Theta Sorority, Inc.
- Delta Tau Delta
- Department of Access, Compliance, and Equal Opportunity
- Department of Marketing & Logistics
- Dept of History GSO (DOHGSA)
- Dermatology Interest Group
- Diabetes Awareness Club
- Diagnostic/Interventional Radiology Interest Group
- Disability Resource Center
- Disabled Student Union
- Disciples on Campus
- Discipline-Based Education Research (DBER) Alliance
- Division of Academic and Student Affairs
- Doctoral and Masters Student Alliance
- Doctors & Scientists of the Future
- Doctors of Physical Therapy Student Association (DPTSA)
- Dynasty FIU
- Eclipse fashion society
- Eco Engineering Club
- ECO Influencers Biz Club @FIU
- Emergency Medicine Interest Group
- Empowering Women In Law
- EmpowerSocialWork
- Endocrinology and Clinical Practice Interest Group
- Engineering Campus Council
- Engineering Research Society
- Engineers Without Borders - FIU
- English Graduate Organization
- Entertainment Media Arts Club at FIU
- Environmental Conservation and Observation Club
- Environmental Health Sciences Association
- Everglades Hall
- F1@FIU
- Family Medicine Interest Group
- Fencing Club
- Field Hockey
- Financial Management Association at FIU
- Financial Wellness Program
- Fine Arts Student Association
- FIU Army ROTC
- FIU Athletics
- FIU Career Ready
- FIU Catholic Panthers
- FIU Class of 2023
- FIU Disaster Volunteer Program
- FIU Esports
- FIU Honors College
- FIU Libraries
- FIU Model United Nations Program
- FIU Online
- FIU Peer Mentor Program
- FIU Phi Kappa Phi Honors Society
- FIU Psychology
- FIU Student Media
- Florida Engineering Society
- Florida International Student Institute for Computational Applications
- Florida Student Power
- Food Recovery Network of FIU
- Formula SAE
- Friends of MSF at FIU
- Frost Art Museum - FIU
- Future Business Leaders of America-Phi Beta Lambda (FBLA)
- Future Educators Association
- Future Innovators- Honors College Engineering & Computing
- Future Nurses of America
- Garden Club
- GearShifters
- Geek Culture Club
- genCLEO
- Geology Club @FIU
- Girl Gains FIU
- GitStart
- Global Brigades @ FIU
- Global Forensic and Justice Center
- Global Health Interest Group
- Global Learning
- GLOBAL STUDIES STUDENT ASSOCIATION
- Graduate and Professional Student Committee
- Graduate Students Association Economics Club
- Graduate Students Marketing Club
- Graham Center
- Green Campus Initiative
- Green Energy Society
- GROOVEFIU
- H.E.A.L at FIU (Health Education for Aspiring Leaders)
- Haitian Student Union
- Healing Hands
- Health Empowerment Aid and Life Saving Supplies
- Health Empowerment Resources
- Healthcare Executive Student Organization
- Healthy Hearts
- Healthy Living Program
- HEARTbeats A Cappella
- HEARTS Art Club
- HEARTS Crochet Club
- Hearts for the Homeless Miami
- HEARTS Photo Club
- HEARTS Shakespeare Society
- HEARTS Writing Club
- Helping Others Prosper & Excel
- Herbert and Nicole Wertheim School of Music & Performing Arts
- HerCampus FIU
- Here To Dream Organization at FIU
- Herpetology Club
- Higher Education Student Association - HESA
- Hillel
- Hindu Students Council
- Homecoming Council
- Honduras Club
- IEEE - Eta Kappa Nu at FIU
- IEEE Engineering in Medicine and Biology Society
- Immigrant Scholars Organization
- Independent Greek Council
- Indian Students Association
- Industrial-Organizational Psychology Club
- Infectious Disease Interest Group
- INIT FIU
- Innovative Medicine Technology Interest Group
- Institute of Electrical and Electronics Engineers at FIU
- Institute of Transportation Engineers
- Interfraternity Council
- Internal Medicine Interest Group
- International Art and Design Club
- International Business Honor Society
- International Student Union
- InterVarsity Christian Fellowship - MMC
- Intramural Soccer Club @ FIU
- Iranian Student Organization
- Italian Club @ FIU
- Jack D. Gordon Institute for Public Policy
- Japan Club
- Jewish Medical Student Association
- Jose Marti Reading Club
- Kappa Delta Pi International Honor Society In Education
- Kappa Kappa Psi
- Kappa Sigma
- Kesem at Florida International University
- Korean Culture Club
- Korean Language Empowerment Club
- La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.
- Lacrosse - W
- Lakeview North
- Lakeview South
- Lambda Theta Alpha Latin Sorority, Inc.
- Latin American Dance Club
- Latin Student Union
- Latino America Unida, Lambda Alpha Upsilon Fraternity, Inc.
- Latino Medical Student Association
- Lavender Ribbon Initiative
- Le Cercle Francais
- Leaders in Maternal and Child Health
- Little Passengers
- Logistics and Supply Chain Management Association at FIU
- LUMI Interest Group
- MALOKA
- Material Advantage chapter at Florida International University
- Maurice A. Ferré Institute for Civic Leadership
- Medical Genetics Interest Group
- Medical History Interest Group
- Medical Humanities Club at FIU
- Medical Student Council
- Medical Students for Choice
- Medical Students for Gender and Sexuality Advancement
- Medical Students Working to Improve Society and Health


- Medically Engaged Diverse Students
- MEDLIFE FIU
- MedReach
- Men's Engagement Center
- MENA at FIU
- Meteorology Club at FIU
- Minority Association of Pre-Health Students
- Mock Trial at FIU
- Modern Languages Graduate Student Organization
- Multicultural Greek Council
- Multifaith Council
- Music & Medicine Interest Group
- Music Art and Design @ FIU
- Muslim Students Association
- National Association of Black Accountants, Inc. – Florida International University (FIU) Student Chapter
- National Association of Hispanic Journalists
- National Council of Negro Women at FIU
- National Organization of Minority Architecture Students at FIU
- National Pan-Hellenic Council
- National Society of Black Engineers
- National Society of Collegiate Scholars
- National Society Of Leadership and Success @ FIU
- National Student Exchange Club
- National Student Speech Language Hearing Association
- Navigators
- Nepalese Student Association-FIU
- Nu Rho Psi
- Obstetrics and Gynecology Interest Group
- OE Honors College EdgeLab
- Office of Engagement
- Office of Global Indigenous Forum
- Office of Student Conduct and Academic Integrity
- Office of the Ombudsperson
- Omega Phi Beta Sorority, Inc.
- Omega Psi Phi Fraternity, Inc.
- Oncology Interest Group
- Openseat Club @ FIU
- Order of Omega
- Order of the Torch
- Orientation and Family Programs
- Orthopedic Surgery and Sports Medicine Interest Group
- Otolaryngology Interest Group
- Out-of-State Student Association
- Outdoor Club
- Pakistani Students Association
- Panther Aero (American Institute of Aeronautics & Astronautics)
- Panther Bionics
- Panther Christian Life
- Panther Cleanup Club
- Panther Esports
- Panther Gaming
- Panther Hall
- Panther Mock Trial
- Panther Power
- Panther Robotics
- Panther Roundnet
- Panther2Panther Mentor Collective
- Panthers Care
- Panthers Connect Challenge
- Panthers Dance Team @FIU
- Panthers Run Club
- Parkview Hall
- Parkview Honors College EdgeLab
- Pediatrics Interest Group
- PERIOD. The Menstrual Movement
- Phi Alpha
- Phi Alpha Delta Pre-Law Fraternity, International
- Phi Beta Sigma
- Phi Delta Epsilon
- Phi Delta Phi
- Phi Delta Theta
- Phi Gamma Delta
- Phi Mu
- Phi Mu Alpha
- Phi Sigma Rho
- Phi Sigma Sigma
- Phi Sigma Tau
- Phoenician Investment Fund
- Physical Medicine and Rehabilitation Interest Group
- Physician Assistant Student Organization
- Physicians for Social Responsibility
- Pi Delta Phi
- Pi Kappa Alpha
- Pi Kappa Phi
- Pi Lambda Phi
- Pi Sigma Alpha Tau Rho
- Pi Theta Epsilon
- Pickleball Club
- Planned Parenthood Generation Action
- Policy and Healthcare Interest Group
- Politics & International Relations Graduate Student Organization
- Power U for social change at FIU
- Powerlifting Club
- Pre Pharmacy Student Association
- Pre- Optometry Club at FIU
- Pre-Dental Society
- Pre-Graduate Student Association
- Pre-Law Advising and Training Office
- Pre-Law Advocates for Community Engagement and Service (PLACES)
- Pre-Med American Medical Student Association
- Pre-Medical Undergraduate Mentoring Program
- Pre-Nursing Association at FIU
- Pre-Therapy Students Association
- Pre-Veterinary Society
- Prestige Majorette Dance Troupe
- Prestigious Scholarships
- Pride Center
- Pride Student Union
- Progressive Black Men, Inc. - FIU Chapter
- Psi Chi
- Psychiatry Interest Club
- Psychology Ambassadors for Student Success
- Psychology Graduate Student Association
- Quantifying Biology in the Classroom Club
- Recreational Services MMC
- Registered Student Organizations (RSO) Council
- Rehabilitation & Recreational Therapy Club
- Relay for Life
- Residence Hall Association - RHA
- Roarthon
- Robert Stempel College of Public Health & Social Work
- Rugby - M
- Rugby - W
- Sabor Latino
- Sailing Club
- Sales Society
- Salsa Vida Dance Club
- School Psychology Student Association
- Service and Awareness for Neurodegenerative Diseases
- Sexual Education Club
- SGA Intern Program MMC
- SGA Office - BBC
- shopFIU
- SHRM @ FIU
- Sigma Alpha Iota Lambda Omicron
- Sigma Alpha Mu
- Sigma Delta Pi
- Sigma Delta Pi Honor Society
- Sigma Gamma Rho Sorority, Inc.
- Sigma Iota Rho
- Sigma Kappa
- Sigma Lambda Beta International Fraternity, Inc.
- Sigma Lambda Gamma National Sorority, Inc.
- Sigma Phi Epsilon
- Sigma Pi Sigma @ FIU
- Sino-US Language & Culture Salon
- SISTUHS, Incorporated
- Smiles For All
- SOBEWFF Volunteer Program
- Soccer Club
- Society for Sustainable Souls
- Society for Women in Marine Science @ FIU
- Society of Hispanic Professional Engineers
- Society of Manufacturing Engineers @ FIU
- Society of Physics Students
- Society of Professional Journalists at FIU
- Society Of Professional Journalists at FIU 2
- Society of Psychedelic Science
- Society of Women Engineers
- Sociology, Anthropology, and Geography Graduate Student Association
- SORC (Student Organization Resource Center)
- Sport Clubs
- Sport Management Student Association at Florida International University
- Sport Science Organization
- StartUP FIU
- Stempel Public Health Association
- Steven J. Green School of International & Public Affairs
- STITCH (Students Taking Initiative Through Collaboration in Health)
- Student Access & Success
- Student Alliance for Autoimmune Awareness
- Student Ambassadors
- Student Dietetic Association
- Student Experiences
- Student Government Association
- Student Leadership
- Student Life and Development
- Student Nurses' Association
- Student Occupational Therapy Association
- Student Programming Council
- Student Social Work Association
- Student Support Services Club
- Student Veterans of America at FIU
- Student's American Rehabilitation Counseling Association at Florida International University
- Students Care at FIU
- Students for Justice in Palestine
- Students for Life at FIU
- Students for the Exploration and Development of Space at FIU
- Students in Graduate Mathematics Association
- Students Supporting Israel
- Surf Club
- Sustainable Panther Network
- Table Tennis Club
- Tau Beta Pi
- Tau Kappa Epsilon
- Tau Sigma Honor Society at FIU
- Team Students Against Violence
- Tennis Club
- The Brotherhood of Saint Michael & Saint George
- The Coffee Guild
- The Epsilon Chapter of Lambda Alpha at F.I.U.
- The Fresh Club
- The Honors College EdgeLab at BBC
- The Hotel Guild
- The Lambda Chapter of Alpha Kappa Delta
- The Language & Culture Appreciation Club
- The Learning Assistant Society
- The Mages Club
- The National Association of Minority Landscape Architects at FIU
- The National Society of Black Women In Medicine, Inc.
- The Office of National Student Exchange
- The Soustainability Club
- The Trinity Coterie
- The Wine Guild
- The Women's Network
- The Young Democrats at FIU
- Theta Alpha Kappa
- Theta Chi
- Theta Nu Xi Multicultural Sorority, Inc.
- Theta Tau
- Thrift Club @ FIU
- Triathlon Club
- Turkish Student Association
- Turning Point USA
- Undergraduate Research Society
- UNICEF @ FIU
- United Human Rights Foundation at FIU
- United Wesley
- University Apartments
- University Towers
- Up Til Dawn
- Venezuelan Student Alliance club
- Veteran and Military Affairs
- Vietnamese Student Affiliation
- Volleyball - M
- Volleyball - W
- Water Environment Federation
- Water Polo Club
- We Are One
- Wellness and Recreation - BBC
- Wellness and Recreation - MMC
- Wellness Health Outreach Love Expression
- White Coats for Black Lives
- William C. Adams Chapter of the Public Relations Student Society of America
- Wolfe University Center
- Wolfsonian Public Humanities Lab
- Women in Computer Science
- Women in Construction Management
- Women in CyberSecurity
- Women in Medicine
- Women Inspired to Serve and Educate
- Women's Center
- Women's Transportation Seminar
- Wrestling Club
- YEHUDI
- Young Americans for Freedom
- Young Democratic Socialists of America at FIU`;
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      responseText = text;
  
      const endTime = Date.now();
      console.log(`Gemini API call for networking completed in ${endTime - startTime}ms`);
      return text;
    } catch (error) {
      console.error('Error in getNetworkingRecommendations:', error);
      throw error;
    }
  }

// Function to process user input and get recommendations
async function processUserInput(userPreferences, type = 'career') {
    console.log(`Starting processUserInput for ${type} with preferences:`, userPreferences);
    const userInput = `
      Interests: ${userPreferences.interests},
      Skills: ${userPreferences.skills},
      Values: ${userPreferences.values},
      Preferred work environment: ${userPreferences.workEnvironment}
    `;

//   try {
//     const recommendations = await getCareerRecommendations(userInput);
//     console.log('Recommendations received:', recommendations);
//     return recommendations;
//   } catch (error) {
//     console.error('Error in processUserInput:', error);
//     return 'Unable to provide suggestions. Error: ' + error.message;
//   }
  try {
    const recommendations = type === 'career' 
      ? await getCareerRecommendations(userInput)
      : await getNetworkingRecommendations(userInput);
    console.log('Recommendations received:', recommendations);
    return recommendations;
  } catch (error) {
    console.error(`Error in processUserInput for ${type}:`, error);
    return 'Unable to provide suggestions. Error: ' + error.message;
  }
}

export { processUserInput/*, getCareerRecommendations*/ };