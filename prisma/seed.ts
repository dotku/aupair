import "dotenv/config";
import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient();

const mockAuPairs = [
  {
    name: "Emma Chen",
    age: 23,
    nationality: "Chinese",
    location: "Beijing",
    languages: ["Chinese", "English"],
    experience: 2,
    education: "Bachelor in Early Childhood Education",
    bio: "I'm passionate about child development and have experience working with children of all ages. I love creating fun educational activities and helping children learn through play.",
    skills: ["Child Care", "First Aid", "Arts & Crafts", "Music"],
    hobbies: ["Piano", "Reading", "Cooking"],
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Liu Wei",
    age: 25,
    nationality: "Chinese",
    location: "Shanghai",
    languages: ["Chinese", "English", "Japanese"],
    experience: 3,
    education: "Bachelor in Psychology",
    bio: "Experienced au pair with a background in child psychology. I believe in creating a nurturing environment that supports children's emotional and intellectual growth.",
    skills: ["Child Development", "Swimming", "Tutoring", "Cooking"],
    hobbies: ["Photography", "Yoga", "Gardening"],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  },
  {
    name: "Zhang Min",
    age: 24,
    nationality: "Chinese",
    location: "Guangzhou",
    languages: ["Chinese", "English", "Cantonese"],
    experience: 2,
    education: "Bachelor in Education",
    bio: "I specialize in bilingual education and love helping children learn languages through interactive activities. I'm energetic, patient, and creative in my teaching approach.",
    skills: ["Language Teaching", "Sports", "Art", "Story Telling"],
    hobbies: ["Dancing", "Painting", "Traveling"],
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
  },
];

async function main() {
  console.log("Start seeding ...");

  for (const auPair of mockAuPairs) {
    const result = await prisma.aupair.create({
      data: auPair,
    });
    console.log(`Created au pair with id: ${result.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
