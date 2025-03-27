import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          companyName: "Hope (Shenzhen) International Cultural Exchange Co., Ltd.",
          companyShortName: "Hope International",
          nav: {
            home: "Home",
            about: "About Us",
            howItWorks: "How It Works",
            findAuPair: "Find Au Pair",
            findFamily: "Find Family",
            englishEducation: "English Education",
            contact: "Contact",
          },
          hero: {
            title: "Meet Your Perfect Au Pair",
            subtitle: "Connect with qualified college students from the US and Europe for an authentic cultural exchange experience",
            findAuPair: "Find an Au Pair",
            findFamily: "Become a Host Family",
          },
          howItWorks: {
            title: "How Hope AuPair Works",
            subtitle: "Your step-by-step guide to finding the perfect au pair or host family",
            process: {
              title: "The Process",
              subtitle: "Simple steps to your cultural exchange journey"
            },
            steps: {
              profile: {
                title: "Create Your Profile",
                description: "Sign up and create a detailed profile that showcases who you are, your preferences, and what you're looking for in a match.",
                items: [
                  "Complete your personal information",
                  "Upload photos and videos",
                  "Describe your expectations and preferences",
                  "Highlight your skills and experience"
                ]
              },
              search: {
                title: "Search for Matches",
                description: "Browse through our database of verified profiles to find potential matches that meet your criteria.",
                items: [
                  "Browse through verified profiles",
                  "Use filters to narrow your search",
                  "Save favorites for later",
                  "Get personalized recommendations"
                ]
              },
              connect: {
                title: "Connect and Interview",
                description: "Get to know potential matches through our secure platform.",
                items: [
                  "Schedule video calls",
                  "Ask and answer questions",
                  "Discuss expectations",
                  "Share additional information"
                ]
              },
              match: {
                title: "Make the Match",
                description: "Once you've found the right match, we'll help you make it official.",
                items: [
                  "Review and sign agreements",
                  "Complete necessary paperwork",
                  "Set up arrival details",
                  "Prepare for the journey"
                ]
              }
            },
            support: {
              title: "Our Support",
              description: "We're here to help every step of the way",
              items: [
                {
                  title: "24/7 Assistance",
                  description: "Round-the-clock support for both families and au pairs"
                },
                {
                  title: "Verified Profiles",
                  description: "Thorough screening and verification process"
                },
                {
                  title: "Cultural Support",
                  description: "Help with cultural adjustment and integration"
                },
                {
                  title: "Program Duration",
                  description: "Flexible program lengths from 3-12 months"
                }
              ]
            },
            cta: {
              title: "Ready to Begin?",
              description: "Start your au pair journey today",
              buttonFamily: "Find an Au Pair",
              buttonAuPair: "Find a Host Family"
            }
          },
          features: {
            title: "Our Services",
            subtitle: "Professional Au Pair Cultural Exchange Program",
            cultural: {
              title: "Cultural Exchange",
              description: "Experience authentic international cultural exchange with college students",
            },
            language: {
              title: "Language Learning",
              description: "Natural English environment through daily communication",
            },
            safety: {
              title: "Safety First",
              description: "All au pairs undergo thorough background checks and verification",
            },
          },
          whyChooseUs: {
            title: "Why Choose Mary Au Pair",
            subtitle: "Your Trusted Cultural Exchange Partner",
            description: "We provide professional and reliable au pair services",
            points: {
              experience: {
                title: "Years of Experience",
                description: "Successfully matching families and au pairs since 2020"
              },
              quality: {
                title: "Quality Assurance",
                description: "Rigorous screening process for all au pairs"
              },
              support: {
                title: "24/7 Support",
                description: "Professional assistance throughout your journey"
              },
              community: {
                title: "Strong Community",
                description: "Active network of host families and au pairs"
              }
            }
          },
          successStories: {
            title: "Success Stories",
            subtitle: "Hear from Our Community",
            description: "Real experiences from families and au pairs",
            stories: {
              family1: {
                name: "The Smith Family",
                location: "California, USA",
                quote: "Our au pair has become part of our family"
              },
              aupair1: {
                name: "Emma",
                location: "London, UK",
                quote: "An amazing cultural exchange experience"
              },
              family2: {
                name: "The Johnson Family",
                location: "Boston, USA",
                quote: "The perfect match for our children"
              }
            }
          },
          readyToStart: {
            title: "Ready to Start Your Au Pair Journey?",
            subtitle: "Join Our Global Community Today",
            description: "Take the first step towards an enriching cultural exchange experience",
            cta: {
              families: "Find Your Au Pair",
              aupairs: "Become an Au Pair"
            }
          },
          footer: {
            company: "Company",
            about: "We specialize in connecting Chinese families with qualified college students from the US and Europe, promoting international cultural exchange.",
            quickLinks: "Quick Links",
            resources: "Resources",
            contactUs: "Contact Us",
            newsletter: "Newsletter",
            newsLetterText: "Subscribe to get updates about our au pair programs",
            subscribe: "Subscribe",
            home: "Home",
            aboutUs: "About Us",
            howItWorks: "How It Works",
            findAuPair: "Find Au Pair",
            findFamily: "Find Family",
            safetyTips: "Safety Tips",
            faq: "FAQ",
            blog: "Blog",
            testimonials: "Testimonials",
            privacyPolicy: "Privacy Policy",
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            cookies: "Cookie Policy",
            address: "019 High-tech South 7th Road, High-tech Zone Community, Yuehai Street, Nanshan District, Shenzhen",
            allRights: "All Rights Reserved",
          },
          about: {
            title: "About Hope AuPair",
            mission: {
              title: "Our Mission",
              description: "To create meaningful cultural exchange experiences through quality au pair placements, fostering understanding between Chinese families and international students.",
            },
            values: {
              title: "Our Values",
              integrity: {
                title: "Integrity",
                description: "We maintain the highest standards of honesty and transparency in all our operations.",
              },
              quality: {
                title: "Quality",
                description: "We carefully screen and match au pairs and families to ensure the best possible experience.",
              },
              support: {
                title: "Support",
                description: "We provide comprehensive support throughout the entire au pair journey.",
              },
              culture: {
                title: "Cultural Exchange",
                description: "We facilitate meaningful cultural exchange experiences that enrich both families and au pairs.",
              },
            },
            team: {
              title: "Our Team",
              description: "Our experienced team brings together expertise in cultural exchange, education, and family services.",
            },
            history: {
              title: "Our History",
              description: "Founded in Shenzhen, we have been dedicated to promoting international cultural exchange and understanding between China and the West.",
            },
            commitment: {
              title: "Our Commitment",
              description: "We are committed to providing safe, enriching, and transformative au pair experiences for both families and students.",
            },
          },
          findAuPair: {
            title: "Find Your Perfect Au Pair",
            search: {
              title: "Search Au Pairs",
              filters: {
                nationality: "Nationality",
                language: "Languages",
                experience: "Experience",
                education: "Education",
              },
            },
            featured: {
              title: "Featured Au Pairs",
              viewProfile: "View Profile",
            },
            requirements: {
              title: "Requirements",
              list: [
                "Valid student status",
                "Clean background check",
                "Childcare experience",
                "Language proficiency",
              ],
            },
          },
          findFamily: {
            title: "Find a Host Family",
            search: {
              title: "Search Families",
              filters: {
                location: "Location",
                children: "Number of Children",
                duration: "Program Duration",
                start: "Start Date",
              },
            },
            featured: {
              title: "Featured Families",
              viewDetails: "View Details",
            },
            benefits: {
              title: "Benefits",
              list: [
                "Cultural immersion",
                "Language practice",
                "Safe accommodation",
                "Monthly stipend",
              ],
            },
          },
          englishEducation: {
            title: "English Education Program",
            overview: {
              title: "Program Overview",
              description: "Enhance your English skills while experiencing life abroad.",
            },
            features: {
              title: "Program Features",
              language: {
                title: "Language Immersion",
                description: "Daily English practice in a natural environment.",
              },
              culture: {
                title: "Cultural Activities",
                description: "Participate in local events and family activities.",
              },
              support: {
                title: "Academic Support",
                description: "Access to language learning resources and tutoring.",
              },
              certification: {
                title: "Certification",
                description: "Receive a program completion certificate.",
              },
            },
            requirements: {
              title: "Program Requirements",
              list: [
                "Basic English proficiency",
                "Student status",
                "Commitment to learning",
                "Cultural openness",
              ],
            },
          },
          contact: {
            title: "Contact Us",
            form: {
              name: "Your Name",
              email: "Email Address",
              phone: "Phone Number",
              subject: "Subject",
              message: "Message",
              submit: "Send Message",
            },
            office: {
              title: "Our Office",
              address: "019 High-tech South 7th Road, High-tech Zone Community, Yuehai Street, Nanshan District, Shenzhen",
              phone: "+86 755 8633 3939",
              email: "info@maryaupair.com",
            },
            hours: {
              title: "Office Hours",
              weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
              weekend: "Saturday: 10:00 AM - 2:00 PM",
              timezone: "China Standard Time",
            },
          },
          chatbot: {
            title: "Hope AuPair Assistant",
            openChat: "Open chat",
            closeChat: "Close chat",
            welcome: "Welcome to Hope AuPair Assistant",
            helpTopics: "You can ask about",
            topics: {
              auPairProgram: "Au Pair Program Overview",
              familyRequirements: "Host Family Requirements",
              applicationProcess: "Application Process",
              culturalExchange: "Cultural Exchange Experience"
            },
            typing: "Typing...",
            inputPlaceholder: "Type your question...",
            send: "Send message",
            errorMessage: "Sorry, there seems to be a technical issue. Please try again later or contact us at info@hopeaupair.com"
          },
        },
      },
      zh: {
        translation: {
          companyName: "霍普(深圳)国际文化交流有限公司",
          companyShortName: "霍普国际文化交流",
          nav: {
            home: "首页",
            about: "关于我们",
            howItWorks: "服务流程",
            findAuPair: "寻找互惠生",
            findFamily: "寻找寄宿家庭",
            englishEducation: "英语教育",
            contact: "联系我们",
          },
          hero: {
            title: "遇见欧美优秀大学生互惠生",
            subtitle: "为您的家庭带来地道英语环境和国际文化交流体验",
            findAuPair: "寻找互惠生",
            findFamily: "成为寄宿家庭",
          },
          howItWorks: {
            title: "霍普互惠生服务流程",
            subtitle: "寻找完美互惠生或寄宿家庭的分步指南",
            process: {
              title: "申请流程",
              subtitle: "开启文化交流之旅的简单步骤"
            },
            steps: {
              profile: {
                title: "创建个人档案",
                description: "注册并创建详细的个人档案，展示您是谁，您的偏好以及您在寻找什么样的匹配。",
                items: [
                  "完善个人信息",
                  "上传照片和视频",
                  "描述您的期望和偏好",
                  "突出您的技能和经验"
                ]
              },
              search: {
                title: "搜索匹配",
                description: "浏览我们经过验证的档案数据库，找到符合您标准的潜在匹配。",
                items: [
                  "浏览已验证的档案",
                  "使用筛选器缩小搜索范围",
                  "保存喜欢的档案",
                  "获取个性化推荐"
                ]
              },
              connect: {
                title: "联系和面试",
                description: "通过我们的安全平台了解潜在的匹配对象。",
                items: [
                  "安排视频通话",
                  "提问和回答问题",
                  "讨论期望",
                  "分享更多信息"
                ]
              },
              match: {
                title: "确认匹配",
                description: "一旦找到合适的匹配，我们将帮助您完成正式程序。",
                items: [
                  "审查并签署协议",
                  "完成必要的文书工作",
                  "安排到达细节",
                  "为旅程做准备"
                ]
              },
              begin: {
                title: "开始旅程",
                description: "带着信心开始您的互惠生体验，我们将全程为您提供支持。",
                items: [
                  "获取资源和支持",
                  "加入当地互惠生社区",
                  "获得挑战指导",
                  "分享经验和反馈"
                ]
              }
            },
            forFamilies: {
              title: "寄宿家庭指南",
              description: "接待互惠生需要了解的事项",
              benefits: {
                title: "接待互惠生的好处",
                item1: "灵活的育儿服务，适应您家庭的时间安排",
                item2: "为您的孩子提供文化交流和语言学习机会",
                item3: "迎接一位带来新视角的家庭成员",
                item4: "对于多个孩子来说是经济实惠的育儿方案",
                item5: "建立超越互惠生项目的长期关系"
              },
              responsibilities: {
                title: "家庭责任",
                item1: "提供私人房间和餐食",
                item2: "支付每周津贴",
                item3: "尊重工作时间和休息时间",
                item4: "邀请互惠生参与家庭活动"
              }
            },
            forAuPairs: {
              title: "互惠生指南",
              description: "成为互惠生需要了解的事项",
              benefits: {
                title: "成为互惠生的好处",
                item1: "从内部体验新的文化和国家",
                item2: "通过日常生活交流，让孩子自然习得英语，培养跨文化交际能力",
                item3: "培养宝贵的育儿技能和经验",
                item4: "获得住宿、餐食和每周津贴",
                item5: "建立国际关系网和友谊"
              },
              responsibilities: {
                title: "互惠生责任",
                item1: "根据家庭需求提供育儿服务",
                item2: "协助与孩子相关的家务",
                item3: "尊重家庭规则和隐私",
                item4: "与家庭分享您的文化和语言"
              }
            },
            faq: {
              title: "常见问题",
              description: "关于互惠生项目的常见问题解答",
              questions: {
                q1: {
                  title: "互惠生项目一般持续多长时间？",
                  answer: "大多数互惠生项目持续6-12个月，根据国家规定和双方协议可以延长至2年。"
                },
                q2: {
                  title: "互惠生的典型工作时间是怎样的？",
                  answer: "根据国家和具体安排，互惠生每周工作25-45小时。他们每周至少有一天完整的休息日和充足的自由时间。"
                },
                q3: {
                  title: "接待互惠生的费用是多少？",
                  answer: "费用因国家而异，通常包括每周津贴、住宿和餐食，可能还包括语言课程或其他福利。我们的平台提供每个国家的详细费用明细。"
                },
                q4: {
                  title: "如果匹配不成功怎么办？",
                  answer: "我们提供重新匹配服务，帮助双方找到更合适的安排。我们的支持团队全程提供调解和协助。"
                },
                q5: {
                  title: "互惠生需要特殊签证吗？",
                  answer: "是的，大多数国家要求特定的互惠生或文化交流签证。我们为不同国家的签证要求和申请流程提供指导。"
                },
                q6: {
                  title: "互惠生需要哪些资格？",
                  answer: "要求因国家而异，但通常互惠生应年龄在18-30岁之间，有育儿经验，基本的语言能力，并通过背景调查。某些国家可能有额外要求。"
                }
              }
            },
            cta: {
              title: "准备开始？",
              description: "今天就开启您的互惠生之旅",
              buttonFamily: "寻找互惠生",
              buttonAuPair: "寻找寄宿家庭"
            }
          },
          features: {
            title: "我们的优势",
            subtitle: "专业的互惠生文化交流项目",
            cultural: {
              title: "欧美大学生资源",
              description: "精选来自美国、英国、澳洲等国知名大学的在校生和应届毕业生，提供纯正的英语环境"
            },
            language: {
              title: "沉浸式英语学习",
              description: "通过日常生活交流，让孩子自然习得英语，培养跨文化交际能力"
            },
            safety: {
              title: "严格审核把关",
              description: "所有互惠生均通过背景调查，确保教育背景真实可靠，性格开朗友善"
            },
          },
          whyChooseUs: {
            title: "为什么选择玛丽互惠",
            subtitle: "您值得信赖的文化交流伙伴",
            description: "我们提供专业可靠的互惠生服务",
            points: {
              experience: {
                title: "多年经验",
                description: "自2020年起成功服务众多家庭与互惠生"
              },
              quality: {
                title: "品质保证",
                description: "对所有互惠生进行严格筛选"
              },
              support: {
                title: "全天候支持",
                description: "全程提供专业贴心的服务"
              },
              community: {
                title: "强大社群",
                description: "活跃的寄宿家庭和互惠生网络"
              }
            }
          },
          successStories: {
            title: "成功案例",
            subtitle: "听听他们的故事",
            description: "来自家庭和互惠生的真实体验",
            stories: {
              family1: {
                name: "史密斯家庭",
                location: "美国，加利福尼亚",
                quote: "我们的互惠生已经成为家庭的一员"
              },
              aupair1: {
                name: "艾玛",
                location: "英国，伦敦",
                quote: "难忘的文化交流经历"
              },
              family2: {
                name: "约翰逊家庭",
                location: "美国，波士顿",
                quote: "为我们的孩子找到最合适的互惠生"
              }
            }
          },
          readyToStart: {
            title: "准备开启您的互惠生之旅？",
            subtitle: "立即加入我们的全球社区",
            description: "迈出通往丰富文化交流体验的第一步",
            cta: {
              families: "寻找互惠生",
              aupairs: "成为互惠生"
            }
          },
          footer: {
            company: "公司",
            about: "我们专注于为中国家庭引进欧美优秀大学生互惠生，致力于促进中外青年文化交流与理解。",
            quickLinks: "快速导航",
            resources: "资源中心",
            contactUs: "联系方式",
            newsletter: "订阅更新",
            newsLetterText: "订阅我们的电子报，获取最新互惠生项目资讯",
            subscribe: "立即订阅",
            home: "首页",
            aboutUs: "关于我们",
            howItWorks: "服务流程",
            findAuPair: "寻找互惠生",
            findFamily: "寻找寄宿家庭",
            safetyTips: "安全指南",
            faq: "常见问题",
            blog: "博客资讯",
            testimonials: "项目反馈",
            privacyPolicy: "隐私政策",
            terms: "服务条款",
            privacy: "隐私政策",
            cookies: "Cookie政策",
            address: "深圳市南山区粤海街道高新区社区高新南七道019号",
            allRights: "版权所有",
          },
          about: {
            title: "关于玛丽互惠",
            mission: {
              title: "我们的使命",
              description: "通过优质的互惠生项目创造有意义的文化交流体验，促进中国家庭与国际学生之间的理解。",
            },
            values: {
              title: "我们的价值观",
              integrity: {
                title: "诚信",
                description: "在所有运营中保持最高标准的诚实和透明。",
              },
              quality: {
                title: "品质",
                description: "严格筛选并匹配互惠生和家庭，确保最佳体验。",
              },
              support: {
                title: "支持",
                description: "在整个互惠生项目过程中提供全面的支持服务。",
              },
              culture: {
                title: "文化交流",
                description: "促进有意义的文化交流体验，丰富家庭和互惠生的生活。",
              },
            },
            team: {
              title: "我们的团队",
              description: "我们经验丰富的团队汇集了文化交流、教育和家庭服务方面的专业知识。",
            },
            history: {
              title: "我们的历史",
              description: "公司成立于深圳，致力于促进中国与西方之间的国际文化交流与理解。",
            },
            commitment: {
              title: "我们的承诺",
              description: "我们致力于为家庭和学生提供安全、充实和变革性的互惠生体验。",
            },
          },
          findAuPair: {
            title: "找到理想的互惠生",
            search: {
              title: "搜索互惠生",
              filters: {
                nationality: "国籍",
                language: "语言",
                experience: "经验",
                education: "教育背景",
              },
            },
            featured: {
              title: "推荐互惠生",
              viewProfile: "查看档案",
            },
            requirements: {
              title: "申请要求",
              list: [
                "有效的学生身份",
                "无犯罪记录",
                "育儿经验",
                "语言能力",
              ],
            },
          },
          findFamily: {
            title: "寻找寄宿家庭",
            search: {
              title: "搜索家庭",
              filters: {
                location: "地点",
                children: "孩子数量",
                duration: "项目时长",
                start: "开始日期",
              },
            },
            featured: {
              title: "推荐家庭",
              viewDetails: "查看详情",
            },
            benefits: {
              title: "项目福利",
              list: [
                "文化沉浸",
                "语言实践",
                "安全住宿",
                "月度津贴",
              ],
            },
          },
          englishEducation: {
            title: "英语教育项目",
            overview: {
              title: "项目概览",
              description: "在国外生活体验中提升英语水平。",
            },
            features: {
              title: "项目特色",
              language: {
                title: "语言沉浸",
                description: "在自然环境中每日练习英语。",
              },
              culture: {
                title: "文化活动",
                description: "参与当地活动和家庭活动。",
              },
              support: {
                title: "学术支持",
                description: "获取语言学习资源和辅导。",
              },
              certification: {
                title: "项目证书",
                description: "获得项目完成证书。",
              },
            },
            requirements: {
              title: "项目要求",
              list: [
                "基本英语水平",
                "学生身份",
                "学习投入",
                "文化开放性",
              ],
            },
          },
          contact: {
            title: "联系我们",
            form: {
              name: "您的姓名",
              email: "电子邮箱",
              phone: "电话号码",
              subject: "主题",
              message: "留言内容",
              submit: "发送消息",
            },
            office: {
              title: "办公地点",
              address: "深圳市南山区粤海街道高新区社区高新南七道019号",
              phone: "+86 755 8633 3939",
              email: "info@maryaupair.com",
            },
            hours: {
              title: "办公时间",
              weekdays: "周一至周五：上午9:00 - 下午6:00",
              weekend: "周六：上午10:00 - 下午2:00",
              timezone: "中国标准时间",
            },
          },
          chatbot: {
            title: "霍普互惠生助手",
            openChat: "打开聊天",
            closeChat: "关闭聊天",
            welcome: "欢迎使用霍普互惠生在线助手",
            helpTopics: "您可以询问",
            topics: {
              auPairProgram: "互惠生项目介绍",
              familyRequirements: "寄宿家庭要求",
              applicationProcess: "申请流程",
              culturalExchange: "文化交流体验"
            },
            typing: "正在输入...",
            inputPlaceholder: "请输入您的问题...",
            send: "发送消息",
            errorMessage: "抱歉，出现了技术问题。请稍后再试或发送邮件至 info@hopeaupair.com 联系我们。"
          },
          support: {
            title: "我们的支持",
            description: "全程为您提供帮助",
            items: [
              {
                title: "24/7 全天候服务",
                description: "为家庭和互惠生提供全天候支持"
              },
              {
                title: "档案验证",
                description: "严格的筛选和验证流程"
              },
              {
                title: "文化支持",
                description: "提供文化适应和融入帮助"
              },
              {
                title: "项目期限",
                description: "灵活的3-12个月项目期限"
              }
            ]
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
